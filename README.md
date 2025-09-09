# Next.js Authentication App

A complete authentication system built with Next.js 15, Prisma ORM, Neon PostgreSQL, bcrypt, and JWT tokens.

## 🚀 Features

- **User Registration & Login** - Secure user authentication
- **JWT-based Authentication** - Stateless token-based auth
- **Password Hashing** - bcrypt with 12 salt rounds
- **Protected Routes** - Middleware-protected API endpoints
- **TypeScript Support** - Full type safety
- **Prisma ORM** - Type-safe database operations
- **Neon PostgreSQL** - Serverless PostgreSQL database
- **Input Validation** - Comprehensive request validation
- **Interactive Testing** - Built-in test interface

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: Neon PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT + bcrypt
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## 📋 Prerequisites

- Node.js 18.18+ (recommended: 20.x)
- npm or yarn
- Neon database account
- Git

## ⚡ Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd my-app
npm install
```

### 2. Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your credentials
nano .env
```

Required environment variables:
```env
DATABASE_URL="postgresql://username:password@your-neon-host/database?sslmode=require"
JWT_SECRET="your-super-secret-jwt-key-here"
```

### 3. Generate JWT Secret

```bash
# Generate a secure JWT secret
openssl rand -base64 32
```

### 4. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push
```

### 5. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your app!

## 🧪 Testing

### Interactive Testing

Visit `http://localhost:3000/auth-test` for an interactive test interface.

### API Testing

Use the requests in `API_TEST_REQUESTS.md` with Postman or Thunder Client.

### Sample Test Flow

1. **Register a user**:
   ```bash
   curl -X POST http://localhost:3000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","password":"password123"}'
   ```

2. **Login**:
   ```bash
   curl -X POST http://localhost:3000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","password":"password123"}'
   ```

3. **Access protected route**:
   ```bash
   curl -X GET http://localhost:3000/api/profile \
     -H "Authorization: Bearer YOUR_JWT_TOKEN"
   ```

## 📁 Project Structure

```
my-app/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── register/route.ts    # Registration endpoint
│   │   │   │   └── login/route.ts       # Login endpoint
│   │   │   └── profile/route.ts         # Protected profile endpoint
│   │   ├── auth-test/page.tsx           # Interactive test page
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── lib/
│   │   └── auth.ts                      # Authentication utilities
│   └── middleware.ts                    # JWT middleware
├── .env.example                        # Environment template
├── API_TEST_REQUESTS.md               # API testing guide
├── setup.md                           # Detailed setup guide
└── README.md                          # This file
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Database
npm run db:generate      # Generate Prisma client
npm run db:push          # Push schema to database
npm run db:migrate       # Run database migrations
npm run db:studio        # Open Prisma Studio
```

## 🔐 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | ❌ |
| POST | `/api/auth/login` | Login user | ❌ |
| GET | `/api/profile` | Get user profile | ✅ |

### Request/Response Examples

#### Register User
```json
POST /api/auth/register
{
  "email": "user@example.com",
  "password": "securepassword123"
}

Response (201):
{
  "message": "User created successfully",
  "user": {
    "id": "clx1234567890",
    "email": "user@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### Login User
```json
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "securepassword123"
}

Response (200):
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "clx1234567890",
    "email": "user@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### Get Profile
```json
GET /api/profile
Authorization: Bearer YOUR_JWT_TOKEN

Response (200):
{
  "user": {
    "id": "clx1234567890",
    "email": "user@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## 🛡️ Security Features

- **Password Hashing**: bcrypt with 12 salt rounds
- **JWT Tokens**: 7-day expiration with secure signing
- **Input Validation**: Comprehensive request validation
- **SQL Injection Protection**: Prisma ORM prevents SQL injection
- **Type Safety**: TypeScript ensures type safety
- **Environment Variables**: Sensitive data in environment variables
- **CORS Protection**: Built-in Next.js CORS handling

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuration

### Database (Neon)

1. Create a Neon account at [console.neon.tech](https://console.neon.tech)
2. Create a new project
3. Copy the connection string
4. Update `DATABASE_URL` in your `.env` file

### JWT Secret

Generate a strong JWT secret:
```bash
openssl rand -base64 32
```

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check your `DATABASE_URL` in `.env`
   - Ensure your Neon database is running
   - Run `npm run db:push` to sync schema

2. **JWT Secret Error**
   - Ensure `JWT_SECRET` is set in `.env`
   - Generate a new secret with `openssl rand -base64 32`

3. **Prisma Client Error**
   - Run `npm run db:generate` to regenerate client
   - Check your Prisma schema syntax

4. **TypeScript Errors**
   - Run `npm run build` to check for type errors
   - Ensure all dependencies are installed

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Neon Documentation](https://neon.tech/docs)
- [JWT.io](https://jwt.io) - JWT token debugger

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Prisma team for the excellent ORM
- Neon team for the serverless PostgreSQL
- All open source contributors

---

**Happy coding! 🚀**