const mongoose = require('mongoose')


const NotesCategorySchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    img_url:{
        type:String,
        default: "https://img.freepik.com/free-photo/international-day-education-cartoon-style-with-stack-books_23-2151007466.jpg?t=st=1723711949~exp=1723715549~hmac=b1b7dbebf49490c612996dadee0833a3183439e0d86d6077434bca6d0ab1df6e&w=360",
    }
}) 
const NotesSchema = mongoose.Schema({
    category:{
        type: String,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    likesCount:{
        type:Number,
        default:0
    },
    img_url:{
        type:String,
        default:"https://img.freepik.com/free-vector/post-it-collection-notes_1361-583.jpg?uid=R65903555&ga=GA1.1.364159305.1722171058&semt=ais_hybrid"
    },

}) 
const UserSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    likeNotes:{
        type:Array,
        default:[],
    },
    saves:{
        type:Array,
        default:[],
    },
    
})

const NotesCategoryModel = mongoose.model('notesCategory',NotesCategorySchema);
const NotesModel = mongoose.model('notes',NotesSchema);
const UserModel = mongoose.model('users',UserSchema);

module.exports = {
     NotesModel,
     UserModel,
     NotesCategoryModel,
    }