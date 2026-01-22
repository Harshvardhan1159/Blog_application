import prisma from "../DB/db.confog.js"

const createBlog = async (req, res) => {
    const { title, content } = req.body;
    const user = req.user;

    console.log(user);
    try {
        if (!title || !content) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const newBlog = await prisma.blog.create({
            data: {
                title: title,
                content: content,
                user_id: user.id

            }
        })
        return res.status(201).json({ message: "Blog created successfully", blog: newBlog })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}
const getBlogs = async (req, res) => {
    try {
        const blogs = await prisma.blog.findMany()
        return res.status(200).json({ message: "Blogs fetched successfully", blogs: blogs })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}
const getsingleBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await prisma.blog.findUnique({
            where: {
                id: parseInt(id)
            }
        })
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" })
        }
        return res.status(200).json({ message: "Blog fetched successfully", blog: blog })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}
const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        if (!title && !content) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const updatedBlog = await prisma.blog.update({
            where: {
                id: parseInt(id)
            },
            data: {
                title: title,
                content: content
            }
        })
        return res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}
const deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBlog = await prisma.blog.delete({
            where: {
                id: parseInt(id)
            }
        })
        return res.status(200).json({ message: "Blog deleted successfully", blog: deletedBlog })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}
export { createBlog, getBlogs, getsingleBlog, updateBlog, deleteBlog }    