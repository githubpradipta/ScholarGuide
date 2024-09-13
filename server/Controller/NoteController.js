const { NotesModel, NotesCategoryModel, UserModel } = require('../Model/DB');
const HttpError = require("standard-http-error")
const {uploadOnCloudinary} = require('../Utility/cloudinary');
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
const reviewNotes = async(req,res,next)=>{
    const userId = req.params.id
    const newNote = req.body;
    const localFilePath = req.file.path;
    
    try {
        const cluRes = await uploadOnCloudinary(localFilePath);
        newNote.note_url = cluRes.secure_url
        
        const note = await NotesModel.create(newNote);
        
        const updatedUser = await UserModel.findOneAndUpdate({_id:userId},{$push:{notes: note._id}},{new:true});
        
        
        res.status(200).json({
            message:"Note send for approval",
            user:updatedUser,
        })  
    } catch (err) {
        return next(new HttpError(500,err))  
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
        const result = await(NotesModel.find({category:name,status:1}));
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
const approveNote = async(req,res,next)=>{
    const approvedNoteId = req.params.id;

    try{
        const result = await NotesModel.findOneAndUpdate({_is:approvedNoteId},{$set:{status:1}});
        res.status(201).json({
            message:"Note Recommended"
        })
    }
    catch(err){
        return next(new HttpError(500))
    }
    

    
}
module.exports = {
    getNotes,
    getSavedNotes,
    setNoteLikes,
    approveNote,
    getCategories,
    createNoteCategory,
    reviewNotes,
}