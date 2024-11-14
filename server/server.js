const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');
require('dotenv').config();
require ('./Model/Connection.js')
const NotesRouter = require('./Router/NotesRouter.js');
const AdminRouter = require('./Router/AdminRouter.js');
const UserRouter = require('./Router/UserRouter.js');
const BlogRouter = require('./Router/BlogRouter.js');


const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use('/notes',NotesRouter);
app.use('/admin',AdminRouter);
app.use('/user',UserRouter);
app.use('/blog',BlogRouter);

app.use((err,req,res,next)=>{
    err.code = err.code || 500;
    res.status(err.code).json({
        status:err.code,
        message:err.message,
    })
    
})



app.listen((8000), console.log("Server started"))
