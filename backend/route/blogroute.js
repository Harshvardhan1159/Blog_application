
import { Router } from "express";
import { getBlogs, createBlog, updateBlog, deleteBlog, getsingleBlog } from "../Controller/BlogController.js";
import authMiddleware from "../middleware/auth.middleware.js";

const route = Router();

route.post("/create", authMiddleware, createBlog);
route.get("/", getBlogs)
route.get("/:id", getsingleBlog);
route.put("/:id", updateBlog);
route.delete("/:id", deleteBlog);

export default route;