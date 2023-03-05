const mongoose = require('mongoose')
const bcrypt = require('bcryptjs') //used to hash password
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    newemail:{
        type: String,
        required:true
    },
    pemail:{
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
    contactno:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    tokens:[
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

//hashing the password
//.pre('save') means run this before the save method
//this basically means "user schema save hone se phele ye run karo"

//we could use arrow funcition but we used normal traditional one coz 'this' keyword does not work with arrow funciton

userSchema.pre('save', async function(next){
    if(this.isModified('newpassword')){
         this.newpassword = await bcrypt.hash(this.newpassword, 12)
         this.cnewpassword = await bcrypt.hash(this.cnewpassword, 12)
    }
    next()
})

//we are generating auth token
userSchema.methods.generateAuthToken = async function(){
      try{
          let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY)   //will take 2 parameters..payload and secret key
                                                 //_id is the id from our document in DB
          this.tokens = this.tokens.concat({token:token}) //we need an array of tokens coz a new token is generated every time a user logins
          await this.save()
          return token
        }catch(err){
          console.log(err)
      }
} 

const User = mongoose.model('USER', userSchema)

module.exports = User