//THIS PAGE IS NOT INCLUDED

import './Form.css'
import React, {useState} from 'react';
import axios from 'axios';
export default function Form(){
   

   const [formData, setFormData] = React.useState({
    firstname:"",
    lastname:"",
    email:"",
    url:"",
    address:"",
    dob:""
   })

   console.log(formData)
 
  function handleChange(event){
    const{name,type,value} = event.target
    setFormData(prevFormData => ({
       ...prevFormData,
       [name] : value
    }))
  }

  // function handleSubmit(event){
  //   event.preventDefault()
  //   axios.post('http://localhost:3000/api/complain', formData)
  //   .then(response=> console.log(response.data))
  // }

    return(
        <div className='help'>
            <div className="Form">

                  <form method="post" >  
                       <div className='int'>
                       <label htmlFor="in1">First Name</label>
                       <input 
                            type="text" 
                            name="firstname"  
                            placeholder="Enter only letters"  
                            id="in1"
                            value={formData.firstname}
                            onChange={handleChange}
                            required="true"
                        />
                       </div>
                       <label htmlFor="in2">Last Name</label>
                       <input 
                            type="text" 
                            name="lastname"  
                            placeholder="Enter only letters"  
                            id="in2"
                            value={formData.lastname}
                            onChange={handleChange}
                            required="true"
                        />
                       <div className="int">
                       <label htmlFor="in3">Email</label>
                       <input 
                             type="email" 
                             name="email"  
                             id="in3" 
                             placeholder="Enter Your valid Email id"
                             value={formData.email}
                             onChange={handleChange}
                             required="true"
                        />
                       </div>
                       <div className="int">
                       <label htmlFor="in4">URL</label> 
                       <input 
                             type="text" 
                             name="url"  
                             id="in4"  
                             placeholder="Enter the malicious URL"
                             value={formData.url}
                             onChange={handleChange}
                             required="true"
                        />
                       </div>
                       <div className="int">
                       <label htmlFor="in5">Address</label>
                       <input 
                             type="text" 
                             id="in5" 
                             name='address' 
                             placeholder="Please enter the correct link"
                             value={formData.address}
                             onChange={handleChange}
                             required="true"
                        />
                       </div>
                       <label htmlFor="in6">DOB</label>
                       <input 
                             type="date" 
                             id="in6" 
                             name='dob' 
                             placeholder="Date of Birth"
                             value={formData.dob}
                             onChange={handleChange}
                             required="true"
                        />
                       <br />
                       <input type="reset" />
                       <br />
                       <button className='btn1'>Submit</button>
                       
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
