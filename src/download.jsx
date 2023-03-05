import './download.css'
import React,{useEffect} from 'react'
import {useNavigate} from "react-router-dom"


export default function Download(){

  const navigateto = useNavigate()

  const [userData,setUserData] = React.useState()
  const [received, setReceived] = React.useState(false)

  const callDownloadPage = async () => {
       try{
          const res = await fetch('/api/authorize',{
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
          setUserData(data)

          if(!res.status === 200){
            const error = new Error(res.error)
            throw error
          }
         

       }catch(err){
           console.log(err)
           navigateto('/login')
       }

  }

  //we cannot use async function inside useEffect
    useEffect(() => {
        callDownloadPage() 
    }, []);

    return(
        <div className="download" method="get">
            <div className="download-container">
           {received && <h1>Hello {userData.newusername}</h1>}
            <p className='ext-info'>1. From this page you can download our extension</p>
            <p className='ext-info'>2. You can also download a pdf of the instructions on how you can plugin this extension</p>    
            <p className='ext-info'>3. After following the instructions your device will be safe from harmful websites</p>
            <p className='ext-info'>4. If you visit any harmful website then it will be blocked and an email will be sent to us</p>
            <p className='ext-info'>5. If you visit any unwanted sites by yourself then we will be sending an emil to your parents</p>
            <br /><br /><br /><br /><br /><br />
            <center><a className='extension' href="../Extension/ezyzip.zip" download="Virtual-Supervisor">Download Extension</a></center>
            <br /><br /><br /><br /><br />
            <center><a className='extension' href="Instructions.pdf" download="Virtual-Supervisor">Instructions</a></center>         
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