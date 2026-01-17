import express from 'express';
import dotenv from 'dotenv';
import prisma from './DB/db.confog.js';
import userRoute from "./route/userroute.js";
import blogRoute from "./route/blogroute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/user", userRoute);
app.use("/api/blog", blogRoute);

app.get('/', (req, res) => {
    res.json({
        message: 'Blog API is running!',
        endpoints: {
            users: '/api/user',
            blogs: '/api/blog'
        }
    });
})

// Test database connection
const testConnection = async () => {
    try {
        await prisma.$connect();
        console.log('✅ Prisma connected to PostgreSQL');
        const userCount = await prisma.user.count();
        console.log(`📊 Users in database: ${userCount}`);
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
    }
};

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    testConnection();
})
