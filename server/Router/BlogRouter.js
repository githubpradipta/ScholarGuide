const express = require('express');
const router = express.Router();
const { createBlog, deleteAllBlogs, deleteOneBlog, getBlogs } = require('../Controller/BlogController')

router
.get('/blogs',getBlogs)

.post('/create',createBlog)
.post('/delete/:id',deleteOneBlog)
.post('/deleteall',deleteAllBlogs)

module.exports = router;
