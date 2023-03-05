const mongoose = require('mongoose')

const DB = process.env.DATABASE
mongoose.set('strictQuery', true);
mongoose.connect(DB).then(()=>{
    console.log("DB Connected");
}).catch((err)=> console.log("no connection"));
