const mongoose = require('mongoose')

const userLogin = new mongoose.Schema({
    newemail:{
        type: String,
        required:true
    },
    newusername:{
        type: String,
        required: true
    },
    newpassword:{
        type: String,
        required: true
    },
    cnewpassword:{
        type: String,
        required: true
    },
})

const NUser = mongoose.model('NUSER', userLogin)

module.exports = NUser