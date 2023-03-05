const mongoose = require('mongoose')

const userComplain = new mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    url:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    dob:{
        type: Date,
        required:true
    }
})

const CUser = mongoose.model('CUSER', userComplain)

module.exports = CUser