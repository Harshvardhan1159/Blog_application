import prisma from "../DB/db.confog.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }
        const newuser = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password_hash: bcrypt.hashSync(password, 10)
            }
        })
        return res.status(201).json({ message: "User created successfully", user: newuser })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }
        if (!bcrypt.compareSync(password, user.password_hash)) {
            return res.status(401).json({ message: "Invalid password" })
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
        return res.status(200).json({ message: "User logged in successfully", user: user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

export { registerUser, loginUser }