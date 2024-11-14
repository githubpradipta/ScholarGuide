const { BlogModel } = require('../Model/DB');
const HttpError = require("standard-http-error");

const createBlog = async(req,res,next)=>{
    const blog = req.body;

    try{
        const result = await BlogModel.create(blog);

        res.status(200).json({
            message:"Bolg posted Successfully",
        })
    }
    catch(err){
        return next(new HttpError(500));
    }
}
const deleteOneBlog = async(req,res,next)=>{
    const blogID = req.params.id;

    try{
        const result = await BlogModel.deleteOne({_id:blogID});
        res.status(200).json({
            message:"Blog successfully deleted"
        })
    }
    catch(err){
        return next(new HttpError(500))
    }
}
const deleteAllBlogs = async(req,res,next)=>{

    try{
        const result = await BlogModel.deleteMany({});
        res.status(200).json({
            message:"Blogs are successfully deleted"
        })
    }
    catch(err){
        return next(new HttpError(500))
    }
}
const getBlogs = async(req,res,next) =>{

    try{
        const result = await BlogModel.find();
        res.status(200).json({
            message:"success",
            blogs: result,
        })
    }
    catch(err){
        return next(new HttpError(500))
    }
}

module.exports = {
    createBlog,
    deleteAllBlogs,
    deleteOneBlog,
    getBlogs
}