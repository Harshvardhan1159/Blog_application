
import { Router } from "express";
import { getBlogs, createBlog, updateBlog, deleteBlog, getBlog } from "../Controller/BlogController.js";

const route = Router();

route.post("/create", createBlog);
route.get("/", getBlogs)
route.get("/:id", getBlog);
route.put("/:id", updateBlog);
route.delete("/:id", deleteBlog);

export default route;