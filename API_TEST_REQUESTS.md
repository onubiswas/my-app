# API Test Requests

This document contains sample requests for testing the authentication API endpoints using Postman or Thunder Client.

## Base URL
```
http://localhost:3000
```

## 1. Register User

**POST** `/api/auth/register`

### Headers
```
Content-Type: application/json
```

### Body (JSON)
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

### Expected Response (201)
```json
{
  "message": "User created successfully",
  "user": {
    "id": "clx1234567890",
    "email": "test@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Error Responses
- **400**: Missing email/password or invalid format
- **409**: User already exists

## 2. Login User

**POST** `/api/auth/login`

### Headers
```
Content-Type: application/json
```

### Body (JSON)
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

### Expected Response (200)
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "clx1234567890",
    "email": "test@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Error Responses
- **400**: Missing email/password
- **401**: Invalid credentials

## 3. Get User Profile (Protected Route)

**GET** `/api/profile`

### Headers
```
Authorization: Bearer YOUR_JWT_TOKEN_HERE
Content-Type: application/json
```

### Expected Response (200)
```json
{
  "user": {
    "id": "clx1234567890",
    "email": "test@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Error Responses
- **401**: Missing or invalid token
- **404**: User not found

## Testing Workflow

1. **Register a new user** using the register endpoint
2. **Login with the same credentials** to get a JWT token
3. **Copy the token** from the login response
4. **Test the protected profile endpoint** using the token in the Authorization header

## Environment Setup

Before testing, make sure you have:

1. **Database setup**:
   ```bash
   # Copy .env.example to .env and update with your Neon database URL
   cp .env.example .env
   
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

## Sample Test Data

You can use these sample credentials for testing:

```json
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

```json
{
  "email": "jane.smith@example.com", 
  "password": "mypassword456"
}
```

## Error Handling

All endpoints return consistent error responses:

```json
{
  "error": "Error message description"
}
```

Common HTTP status codes:
- `200`: Success
- `201`: Created
- `400`: Bad Request (validation errors)
- `401`: Unauthorized (authentication required)
- `404`: Not Found
- `409`: Conflict (duplicate resource)
- `500`: Internal Server Error
