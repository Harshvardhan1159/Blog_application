import prisma from "../DB/db.confog.js"

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
                password_hash: password
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
        if (user.password_hash !== password) {
            return res.status(400).json({ message: "Invalid password" })
        }
        return res.status(200).json({ message: "User logged in successfully", user: user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

export { registerUser, loginUser }