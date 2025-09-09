# Authentication Setup Guide

## Quick Start

1. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your Neon database URL and JWT secret:
   ```
   DATABASE_URL="postgresql://username:password@your-neon-host/database?sslmode=require"
   JWT_SECRET="your-super-secret-jwt-key-here"
   ```

2. **Generate a strong JWT secret** (optional but recommended):
   ```bash
   openssl rand -base64 32
   ```

3. **Set up the database**:
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to your Neon database
   npm run db:push
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

## Database Setup with Neon

1. Go to [Neon Console](https://console.neon.tech/)
2. Create a new project
3. Copy the connection string from the dashboard
4. Replace the `DATABASE_URL` in your `.env` file

## Testing the API

Use the requests in `API_TEST_REQUESTS.md` to test your endpoints with Postman or Thunder Client.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── register/route.ts
│   │   │   └── login/route.ts
│   │   └── profile/route.ts
│   └── ...
├── lib/
│   └── auth.ts
└── middleware.ts
```

## Security Features

- ✅ Password hashing with bcrypt (12 salt rounds)
- ✅ JWT tokens with 7-day expiration
- ✅ Input validation and sanitization
- ✅ Protected routes with middleware
- ✅ TypeScript for type safety
- ✅ Prisma ORM for database operations

## Next Steps

- Add email verification
- Implement password reset
- Add refresh token rotation
- Add rate limiting
- Add user roles and permissions
