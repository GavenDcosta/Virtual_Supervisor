import './Intro.css'
import './login.css'
import React, {useState} from 'react'
// import { response } from 'express'
import {useEffect} from 'react'
import {useNavigate} from "react-router-dom"

export default function Intro(){

  const navigateto = useNavigate()

  const [data,setData] = React.useState()
  const [received, setReceived] = React.useState(false)

  const callDownloadPage = async () => {
       try{
          const res = await fetch('/api/getdata',{
            method:"Get",
            headers:{
              Accept:"application/json",
              "Content-Type": "application/json"
            },
            credentials:"include"
          })

          const data = await res.json()
          console.log(data)
          setReceived(true)
          setData(data)

          if(!res.status === 200){
            const error = new Error(res.error)
            throw error
          }
         

       }catch(err){
           console.log(err)
           navigateto('/')
       }

  }

  //we cannot use async function inside useEffect
    useEffect(() => {
        callDownloadPage() 
    }, []);

      
    return(
        <div>
        <div className="intro">

            <div className="welc">
            {received && <h1 className='username'>Hello {data.newusername}</h1>}
            {received && <h1>Happy to see you back</h1>}
              <h1 className='one-txt'>Welcome to</h1>
              <h1 className='two-txt'>Virtual-Supervisor</h1>
              <h4 className='three-txt'>we are always there to protect you and your devices from harmful websites</h4>
            </div>

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