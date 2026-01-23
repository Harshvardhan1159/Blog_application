import prisma from "../DB/db.confog.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body)
    try {

        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }

        // Check if username OR email already exists
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { username: username },
                    { email: email }
                ]
            }
        })

        if (existingUser) {
            // Provide specific error messages
            if (existingUser.username === username) {
                return res.status(400).json({
                    success: false,
                    message: "Username already taken. Please choose another one."
                })
            }
            if (existingUser.email === email) {
                return res.status(400).json({
                    success: false,
                    message: "Email already registered. Try logging in instead."
                })
            }
        }
        const newuser = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password_hash: bcrypt.hashSync(password, 10)
            }
        })
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user: { id: newuser.id, username: newuser.username, email: newuser.email }
        })
    } catch (error) {
        console.log(error)

        // Handle Prisma unique constraint errors (P2002)
        if (error.code === 'P2002') {
            const field = error.meta?.target?.[0] || 'field';
            return res.status(400).json({
                success: false,
                message: `This ${field} is already taken. Please use a different one.`
            })
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    try {
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found. Please check your email or sign up."
            })
        }
        if (!bcrypt.compareSync(password, user.password_hash)) {
            return res.status(401).json({
                success: false,
                message: "Invalid password. Please try again."
            })
        }
        const token = jwt.sign(
            {
                id: user.id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        )
        res.cookie("token", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: "strict"
        });
        return res.status(200).json({
            success: true,  // ✅ Added this!
            message: "User logged in successfully",
            user: { id: user.id, username: user.username, email: user.email }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export { registerUser, loginUser }