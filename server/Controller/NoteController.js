const { NotesModel, NotesCategoryModel, UserModel } = require('../Model/DB');
const mongoose = require('mongoose');
const HttpError = require("standard-http-error")
const {uploadOnCloudinary} = require('../Utility/cloudinary');
const { Drive_authorize, Drive_uploadFile } = require('../Utility/googleDrive')



// Admin access only
const createNoteCategory = async(req,res,next)=>{
    const data = req.body;
    
    try{
        const resut = NotesCategoryModel.create(data);
        res.status(201).json({
            message:"Category Successfully Created",
        })
    }
    catch(err){
        return next(new HttpError(500,err));
    }
}
const reviewNotes = async(req,res,next)=>{
    const userId = req.params.id
    const newNote = req.body;
    const localFilePath = req.file.path;
    
    
    try {
        
        const creadintial = await Drive_authorize();
        const drive = await Drive_uploadFile(creadintial,localFilePath);
        
        newNote.note_url = drive.webViewLink;
        newNote.noteDownload_url = drive.webContentLink;
        
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
const getPendingNotes = async (req,res,next)=>{
    
    try{
        const result = await NotesModel.find({status:0});
        
        res.status(200).json(result);
    }
    catch(err){
        next(HttpError(500,err.message))
    }
}
const getAllNotes = async (req,res,next)=>{
    try{
        const result = await(NotesModel.find({status:1}));
        res.status(200).json(result);
    }
    catch(err){
        next(HttpError(500,err.message))
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
    const approvedNoteId = new mongoose.Types.ObjectId(req.params.id);
    try{
        const result = await NotesModel.findOneAndUpdate({_id:approvedNoteId},{$set:{status:1}},{new: true});
        
        res.status(201).json({
            message:"Note Approved"
        })
    }
    catch(err){
        return next(new HttpError(500))
    }
    

    
}
const getUploadedNotes = async(req,res,next)=>{
    const userId = req.params.id;

    try{
        const { notes } = await UserModel.findOne({_id:userId})
        const uploadedNotes = await NotesModel.find({_id:{$in: notes}})

        res.status(200).json({
            message:'Success',
            notes: uploadedNotes,
        });
        
    }
    catch(err){
        return next(new HttpError(500));
    }
}
const deleteNote = async(req,res,next)=>{
    const noteId = new mongoose.Types.ObjectId(req.params.id);
    const userId = req.body.userid;

    try{
        const user = await UserModel.findOneAndUpdate({_id:userId},{ $pull:{notes:noteId}},{new:true});
        const result = await NotesModel.deleteOne({_id:noteId});
        
        res.status(200).json({
            message: "Note permanently deleted",
            user:user,
        })

    } 
    catch (err) {
        return next(new HttpError(500));
    }
}


module.exports = {
    getNotes,
    getAllNotes,
    getSavedNotes,
    setNoteLikes,
    approveNote,
    getCategories,
    createNoteCategory,
    reviewNotes,
    getUploadedNotes,
    deleteNote,
    getPendingNotes,
}