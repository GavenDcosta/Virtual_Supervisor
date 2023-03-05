import './login.css'
import './Intro.css'
import './login.css'
import React, {useState} from 'react'
// import { response } from 'express'
import {
  Link,
  Routes,
  Route,
  useNavigate
} from "react-router-dom"
import Register from './Register'



export default function Login(){


    const navigateto = useNavigate()

    const [user, setUser] = React.useState({
      newemail:"",
      newpassword:"",
      cnewpassword:""
     })
  
     console.log(user)
   
    function handleChange(event){
      const{name,type,value} = event.target
      setUser(prevUser => ({
         ...prevUser,
         [name] : value
      }))
    }
  
    
   
    const loginUser = async (e) => {
          e.preventDefault()
  
          const {newemail,newpassword,cnewpassword} = user
  
          const res = await fetch("/api/Intro",{
            method: "POST",
              headers: {
                "Content-Type" : "application/json"
              },
              body: JSON.stringify({
                 newemail,newpassword,cnewpassword
              })
            }) 
  
            const data = res.json()
  
            if(res.status === 400 || !data || newpassword!=cnewpassword){
                  window.alert("Invalid credentials")
                  navigateto("/login")
            }else{
                  window.alert("Login Successful")
                  setUser({
                    newemail:"",
                    newpassword:"",
                    cnewpassword:""
                  })
             navigateto("/")     
            
            }
  
            
    }
    return(
      <div className="loginpage">  
        <div className="login-container">

             <form method='post'  onSubmit ={loginUser}>
             <label htmlFor="one">Email</label>
                   <input 
                       type="email" 
                       placeholder='Enter valid Email' 
                       id='one'
                       value={user.newemail}
                       onChange={handleChange}
                       required="true"
                       name='newemail'
                    />

                   <label htmlFor="three">Password</label>
                   <input 
                       type="password" 
                       placeholder='Enter correct password' 
                       id='three'
                       value={user.newpassword}
                       onChange={handleChange}
                       required="true"
                       name='newpassword'
                    />

                   <label htmlFor="four">Confirm Password</label>
                   <input 
                       type="password" 
                       placeholder='Confirm password' 
                       id='four'
                       value={user.cnewpassword}
                       onChange={handleChange}
                       required="true"
                       name='cnewpassword'
                    />

                   <button className='btn1'>Signin</button>
       <Link id='regis' to="/Register">Create new account</Link>


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
    

