const { NotesModel, NotesCategoryModel, UserModel } = require('../Model/DB');
const HttpError = require("standard-http-error")

// ADmin access only
const createNoteCategory = async(req,res,next)=>{
    const data = req.body;
    
    try{
        const resut = NotesCategoryModel.create(data);
        res.status(201).json({
            message:"Category Successfully Created",
        })
    }
    catch(err){
        return next(new HttpError(500));
    }
}

//User access
const getCategories = async(req,res,next)=>{
    try{
        const result = await NotesCategoryModel.find();
        res.status(201).json(result);
    }
    catch(err){
        return next(new HttpError(500));
    }
}
const getNotes = async (req,res,next)=>{
    const id = req.params.categoryID;
    // console.log(req.cookies);
    
    try{
        const { name } = await NotesCategoryModel.findOne({_id:id})
        const result = await(NotesModel.find({category:name}));
        res.status(200).json(result);
    }
    catch(err){
        next(HttpError(500,err.message))
    }
}
const getSavedNotes = async(req,res,next)=>{
    const userID = req.params.uid;
    
    try{
        const { saves } = await UserModel.findOne({_id:userID})
        const result = await NotesModel.find({_id:{$in: saves}})
        
        res.status(201).json(result);
    }
    catch(err){
        return next(new HttpError(500,err));
        
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

        res.status(200).json({
            message:"Likes updated",
        })

    } catch (err) {
        return next(new HttpError(500));  
    }
}
const createNote = async(req,res,next)=>{
    const data = req.body;

    try {
        const result = await(NotesModel.create(data));
        res.status(200).json({
            message:"Note successfully uploaded"
        })
        
    } catch (err) {
        return next(new HttpError(500))  
    }
}
module.exports = {
    getNotes,
    getSavedNotes,
    setNoteLikes,
    createNote,
    getCategories,
    createNoteCategory,
}