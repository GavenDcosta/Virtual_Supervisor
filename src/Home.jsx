import React  from "react";
import { useState } from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import './Home.css'
import Intro from './Intro'
import Info from './info'
import Download from './download'
import Register from "./Register"
import Error from "./Error"
import Login from "./login"
import Logout from "./logout"


export default function Home() {


  const [toogler,setToogler]=useState(false)
  const [expanded,setExpanded]=useState(false)
  const [icon,setIcon] = useState("../images/hamburger.png")

  function toggle() {
    if (toogler) {
      setToogler(false)
    }
    else{
      setToogler(true)
    }

    if (expanded){
      setExpanded(false)
    }
    else{
      setExpanded(true)
    }

    if (icon){
      setIcon("../images/hamburger.png")
    }
    else{
      setIcon("../images/close.png")
    }
  }

  

  return (
    <div className="grand-parent">
      <header className="primary-header flex">
        <img src="../images/Cybersecurity.webp" alt="" className="logo" />

        

        <nav>
        <button onClick={toggle} className='mobile-nav-toggle' aria-controls='primary-navigation'  aria-expanded={expanded}><div className="sr-only"><img src={icon} alt="" className="hamburger" /></div></button>
          <ul id="primary-navigation" data-visible={toogler} className="primary-navigation flex">
            <li className="active">
              <Link to="/" className='children'><span aria-hidden="true">01</span>Home</Link>
            </li>
            <li className="active">
              <Link to="/login" className='children'><span aria-hidden="true">02</span>Login</Link>
            </li>
            <li className="active">
              <Link to="/Info" className='children'><span aria-hidden="true">03</span>Info</Link>
            </li>
            <li className="active">
              <Link to="/download" className='children'><span aria-hidden="true">04</span>Download</Link>
            </li>
            <li className="active">
              <Link to="/api/logout" className='children'><span aria-hidden="true">05</span>Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className='body'>


        <div className="main-body">
          <Routes>
              <Route path='/' element={<Intro/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/info' element={<Info/>}/> 
              {/* <Route path='/download' element={props.isLogin?<Download/>:<Login/>}/> */}
              <Route path ='/download' element={<Download/>}/>
              <Route path='/Register' element={<Register/>}/>
              <Route path="*" element={<Error />} />
              <Route path="/api/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
     
    </div>
  )


}
     
 
 