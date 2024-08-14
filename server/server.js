const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');
require ('./Model/Connection.js')
const NotesRoutes = require('./Router/NotesRouter.js');
const UserRoutes = require('./Router/UserRouter.js');

const app = express();
app.use(cors());
app.use(express.json())
app.use(cookieParser());

app.listen((8000), console.log("Server started"))

app.use('/notes',NotesRoutes);
app.use('/user',UserRoutes);

app.use((err,req,res,next)=>{
    err.code = err.code || 500;
    res.status(err.code).json({
        status:err.code,
        message:err.message,
    })
    
})

