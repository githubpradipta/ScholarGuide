const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL)
.then(()=>{console.log("DataBase connected...");})
.catch(err=>console.log(err)
)