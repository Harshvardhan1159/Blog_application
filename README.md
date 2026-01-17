# Blog Application

A full-stack blog application built with Node.js, Express, PostgreSQL, and Prisma.

## Features

- User authentication and management
- Create, read, update, and delete blog posts
- One-to-many relationship (User → Blogs)
- RESTful API architecture
- Prisma ORM for database management

## Tech Stack

### Backend
- **Node.js** with Express.js
- **PostgreSQL** database
- **Prisma** ORM
- **dotenv** for environment variables

## Project Structure

```
backend/
├── DB/
│   └── db.confog.js       # Prisma client configuration
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── migrations/        # Database migrations
├── .env                   # Environment variables (not in git)
├── .env.example           # Template for environment variables
├── index.js               # Main server file
├── package.json           # Dependencies
└── .gitignore             # Git ignore rules
```

## Getting Started

### Prerequisites

- Node.js v20.12.2 or higher
- PostgreSQL 18
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd demo
   ```

2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your PostgreSQL credentials:
   ```env
   DATABASE_URL="postgresql://postgres:your_password@localhost:5432/blog_app?schema=public"
   PORT=3000
   ```

4. Create the database:
   ```sql
   CREATE DATABASE blog_app;
   ```

5. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```

6. Generate Prisma Client:
   ```bash
   npx prisma generate
   ```

7. Start the development server:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:3000`

## Database Schema

### User Model
- `id` (Integer, Primary Key)
- `username` (String, Unique)
- `email` (String, Unique)
- `password_hash` (String)
- `created_at` (DateTime)

### Blog Model
- `id` (Integer, Primary Key)
- `title` (String)
- `content` (String)
- `user_id` (Integer, Foreign Key)
- `created_at` (DateTime)
- `updated_at` (DateTime)

## Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma migrate dev` - Create and apply migrations

## API Endpoints (Coming Soon)

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get single blog
- `POST /api/blogs` - Create new blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog

## License

ISC
