const { NotesModel } = require('../Model/DB');
const HttpError = require("standard-http-error")

const getNotes = async (req,res,next)=>{
    const cat = req.params.category;
    // console.log(req.cookies);
    
    
    try{
        const result = await(NotesModel.find({category:cat}));
        res.status(200).json(result);
    }
    catch(err){
        next(HttpError(500,err.message))
    }
}
const setNoteLikes = async(req,res,next)=>{
    const id = req.params.id;
    const { newLikes } = req.body;
    try {
        const result = await(NotesModel.updateOne(
            {_id:id},
            {$set: {likesCount:newLikes}},
        ));

        res.status(200).json(result)

    } catch (err) {
        res.json(err)   
    }
}
const createNote = async(req,res,next)=>{
    const data = req.body;

    try {
        const result = await(NotesModel.create(data));
        res.status(200).json(result)
        console.log(result);
    } catch (err) {
        res.json(err)   
    }
}
module.exports = {
    getNotes,
    setNoteLikes,
    createNote,
}