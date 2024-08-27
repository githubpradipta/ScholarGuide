const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/ScholarGuide")
.then(()=>{console.log("DataBase connected...");})
.catch(err=>console.log(err)
)