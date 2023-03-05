const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser");
router.use(cookieParser());

 //used to verify user
const authenticate = require('../middleware/authenticate')
require('../db/conn')
const User = require("../model/userSchema")
const bcrypt = require('bcryptjs/dist/bcrypt') //used for password hashing

router.get('/' , (req,res) => {
    res.send("Hello World from the server auth.js")
})


//Registration route

//post method is used to get data entered by the user


//USING PROMISES

// router.post('/register', (req,res) => {

//     const {newemail,pemail,newusername,newpassword,cnewpassword,contactno,address,dob} = req.body
  
// //checking if all the fields are filled    

//     if(!newemail || !pemail || !newusername || !newpassword || !cnewpassword || !contactno || !address || !dob){
//             return res.status(422).json({error: "plz fill all options"})    
//     }

// //finding if user already exists

//     User.findOne({newemail:newemail})
//      .then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error: "Email already exists"})
//         }

//         const user = new User({newemail,pemail,newusername,newpassword,cnewpassword,contactno,address,dob})   //if both key and value are the same then no need to write like newemail:newemail....can write newemail only once
        
//         user.save().then(() => {
//             res.status(201).json({message: "user registered successfully"})
//         }).catch((err) => res.status(500).json({error:"faied to registered"}))

// //mongoose.connect me jo DB se connect kiya ha uss db me mongoose.model wala new document create hoga aur ye data usme jayega

//      }).catch(err => { console.log(err) })
    
// })



//USING ASYNC AWAIT

router.post('/api/register', async (req,res) => {

    const {newemail,pemail,newusername,newpassword,cnewpassword,contactno,address,dob} = req.body
  
//checking if all the fields are filled    

    if(!newemail || !pemail || !newusername || !newpassword || !cnewpassword || !contactno || !address || !dob){
            return res.status(422).json({error: "plz fill all options"})    
    }

//finding if user already exists
   
    try {
        const userExist = await User.findOne({newemail:newemail})  //Used to find if the same value is already present in the database

        if(userExist){
            return res.status(422).json({error: "Email already exists"})
        }else if(newpassword != cnewpassword){
            return res.status(422).json({error:"password are not matching"})  
        }else{
            const user = new User({newemail,pemail,newusername,newpassword,cnewpassword,contactno,address,dob})   //if both key and value are the same then no need to write like newemail:newemail....can write newemail only once
        
            //password hashing using bcryptsjs
    
            await user.save()
    
            res.status(201).json({message: "user registered successfully"})
        }


        // const userRegister = await user.save()

        // if(userRegister){
        //     res.status(201).json({message: "user registered successfully"})
        // }else{
        //     res.status(500).json({error:"faied to registered"})  //no need of else ...cause we are anyways catching the error
        // }


//mongoose.connect me jo DB se connect kiya ha uss db me mongoose.model wala new document create hoga aur ye data usme jayega


    } catch (err) {
        console.log(err) 
    } 
})



//Login route

router.post('/api/Intro', async (req,res) => {

    try{
       let token
       const {newemail,newpassword,cnewpassword} = req.body

       if(!newemail || !newpassword || !cnewpassword){
         return res.status(400).json({error: "plz fill all options"})
       }

       const userLogin = await User.findOne({newemail:newemail}) //will search all the documents in the DB and then return one with the same email

    //    console.log(userLogin) //will return entire document from DB
      
       if(userLogin){
            const isMatch = await bcrypt.compare(newpassword, userLogin.newpassword)
            
            //token will be stored in DB every time the user logins
            token = await userLogin.generateAuthToken()
            console.log(token)

            //storing token in cookies
            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000), //25892000000 msec = 30 Days
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({error:"Invalid credentials"})
            }else{
                res.json({message:"Signin Successful"})
            }
       }else{
            res.status(400).json({error:"Invalid credentials"})
       }

      

    }catch(err) {
        console.log(err)
    }
}) 

//download page
router.get("/api/authorize",authenticate,(req,res) => {
    console.log('Hello')
    res.send(req.rootUser)
})

//get user data form home page
router.get("/api/getdata",authenticate,(req,res) => {
    console.log('Hello')
    res.send(req.rootUser)
})

//logout ka page
router.get("/api/logout",(req,res) => {
    console.log('Hello my logout page')
    res.clearCookie("jwtoken", {path:"/"})
    res.status(200).send('user logout')
})




module.exports = router