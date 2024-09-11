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
    department:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
    university:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
    },
    age:{
        type:String,
    },
    contact:{
        type:Number,
    },
    state:{
        type:String,
    },
    city:{
        type:String,
    },
    likeNotes:{
        type:Array,
        default:[],
    },
    saves:{
        type:Array,
        default:[],
    },
    profile_url:{
        type:String,
        default:'https://imgs.search.brave.com/7_-25qcHnU9PLXYYiiK-IwkQx93yFpp__txSD1are3s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzYz/LzM2MF9GXzY0Njc2/MzgzX0xkYm1oaU5N/NllwemIzRk00UFB1/RlA5ckhlN3JpOEp1/LmpwZw'
    }
    
})

const NotesCategoryModel = mongoose.model('notesCategory',NotesCategorySchema);
const NotesModel = mongoose.model('notes',NotesSchema);
const UserModel = mongoose.model('users',UserSchema);

module.exports = {
     NotesModel,
     UserModel,
     NotesCategoryModel,
    }