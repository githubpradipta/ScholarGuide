const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');
require('dotenv').config();
require ('./Model/Connection.js')
const NotesRoutes = require('./Router/NotesRouter.js');
const AdminRoutes = require('./Router/AdminRouter.js');
const UserRoutes = require('./Router/UserRouter.js');


const app = express();
app.use(cors());
app
app.use(express.json())
app.use(cookieParser());


app.use('/notes',NotesRoutes);
app.use('/admin',AdminRoutes);
app.use('/user',UserRoutes);

app.use((err,req,res,next)=>{
    console.log("Error :",err);
    err.code = err.code || 500;
    res.status(err.code).json({
        status:err.code,
        message:err.message,
    })
    
})



app.listen((8000), console.log("Server started"))
