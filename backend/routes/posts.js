const express = require("express");
const {createPost, getAllPosts, getAllPostByAuthor, getPostById, updatePostById} = require("../controllers/posts");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const postsRouter = express.Router();

postsRouter.post("/create", createPost);
postsRouter.get("/",authentication, getAllPosts);
postsRouter.get("/search_1",authentication, getAllPostByAuthor);
postsRouter.get("/search_2/:id",authentication, getPostById);
postsRouter.get("/:id",authentication, updatePostById);

module.exports = postsRouter;