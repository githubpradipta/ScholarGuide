const mongoose = require('mongoose')

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

const NotesModel = mongoose.model('notes',NotesSchema);
const UserModel = mongoose.model('users',UserSchema);

module.exports = {
     NotesModel,
     UserModel,
    }