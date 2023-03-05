import './login.css'
import './Intro.css'
import './Home.css'
import React, { useState } from "react";
import {
  Link,
  Routes,
  Route,
  useNavigate
} from "react-router-dom"
import axios from "axios"

export default function Register(){

    const navigateto = useNavigate()

    const [newUser, setNewUser] = React.useState({
      newemail:"",
      pemail:"",
      newusername:"",
      newpassword:"",
      cnewpassword:"",
      contactno:"",
      address:"",
      dob:""
    })

    console.log(newUser)
     
    function handleNew(event){
      const{name,type,value} = event.target
      setNewUser(prevNewUser => ({
         ...prevNewUser,
         [name] : value
      }))
    }

     const PostData = async (e) => {
          e.preventDefault()    //this will avoid the default reload behavior

          const {newemail,pemail,newusername,newpassword,cnewpassword,contactno,address,dob} = newUser //object destructuring

          const res = await fetch("/api/register", {
            method: "POST",
            headers: {
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({
               newemail,pemail,newusername,newpassword,cnewpassword,contactno,address,dob
            })
          })

           const data = await res.json()

          if(res.status === 422 || !data ){
             window.alert("Invalid registration")
             console.log("Invalid registration")
            

          }else{
            window.alert("Registration Successful")
            console.log("Registration Successful")
            setNewUser({
              newemail:"",
              pemail:"",
              newusername:"",
              newpassword:"",
              cnewpassword:"",
              contactno:"",
              address:"",
              dob:""
            })

            navigateto("/")
          }

         

        
  //         const res = await axios.post('/register',{newUser}, {
  //   method:"POST",        
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }
  // }
// )
// const data = await res.json()

// if(data.status === 422 || !data){
//    window.alert("Invalid registration")
//    console.log("Invalid registration")
// }else{
//   window.alert("Registration Successful")
//   console.log("Registration Successful")
// }

// navigateto("/")
     }

    return(
        <div>
            
<div className="register-container">
    <form method='post'  onSubmit ={PostData} >

    <h1>Register</h1>
       <p className="form-headings">E-mail</p>
       <input 
           name='newemail' 
           type="email"  
           id='a' 
           placeholder='Enter valid Email' 
           className='register'
           value={newUser.newemail}
           onChange={handleNew}
           required="true"
        />

       <p className='form-headings'>Parents Email</p>
       <input 
            name='pemail' 
            type="email" 
            id='b' 
            placeholder='Enter parent email' 
            className='register'
            value={newUser.pemail}
            onChange={handleNew}
            required="true"
        />

       <p className='form-headings'>User-Name</p>
       <input 
             type="text" 
             name='newusername' 
             id='c' 
             placeholder='Enter correct username'  
             className='register'
             value={newUser.newusername}
             onChange={handleNew}
             required="true"
        />

       <p className='form-headings'>Password</p>
       <input 
             type="password" 
             name='newpassword' 
             id='d' 
             placeholder='Enter correct password'  
             className='register'
             value={newUser.newpassword}
             onChange={handleNew}
             required="true"
        />

       <p className='form-headings'>Confirm-Password</p>
       <input 
              type="password" 
              name='cnewpassword' 
              id='e' 
              placeholder='Confirm password'  
              className='register'
              value={newUser.cnewpassword}
              onChange={handleNew}
              required="true"
        />
       
       <p className="form-headings">Contact-No</p>
       <input 
              type="text" 
              name='contactno' 
              id='f' 
              placeholder='Enter Phone-no'  
              className='register'
              value={newUser.contactno}
              onChange={handleNew}
              required="true"
        />

       <p className='form-headings'>Address</p>
       <input 
              type="text" 
              name='address' 
              id='g' 
              placeholder='Enter correct Address'  
              className='register'
              value={newUser.address}
              onChange={handleNew}
              required="true"
        />

       <p className='form-headings'>Date of Birth</p>
       <input 
              type="date" 
              name='dob' 
              id='h'
              placeholder='Enter DOB'  
              className='register'
              value={newUser.dob}
              onChange={handleNew}
              required="true"
        />

       <button className='btn1'>Register</button>
       <br />
       <Link id='regis' to="/login">Return back to signin</Link>
    </form>
    </div>

    <footer>
        <h2>Mini-Project</h2>
        <h3>Team-members:</h3>
        <ul>
          <li>Gaven Dcosta</li>
        </ul>
        <ul>
          <li>Niraj Pingale</li>
        </ul>
        <ul>
          <li>Manish Patil</li>
        </ul>
        <p>Main Goal off our Team is to Protect You From Harmful Websites and to increase your knowledge on cyber crime</p>
      </footer>
        </div>
    )
}