const express = require("express");
const blog = require('../controllers/blog.controller')

module.exports = (app) => {
    const router = express.Router();
    router.route("/")
        .get(blog.getListBlog)
        .post(blog.createBlog)
        .delete(blog.deleteAllBlog)

    router.route("/:id")
        .get(blog.findOneBlog)
        .put(blog.updateBlog)
        .delete(blog.deleteBlog)

    router.route("/retore/:id")
        .put(blog.restoreBlog)
    app.use("/api/blog", router); 
};