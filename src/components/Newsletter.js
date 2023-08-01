import React, {useState} from 'react';
import Image from "../images/illustration-sign-up-desktop.svg";
import MobileImage from "../images/illustration-sign-up-mobile.svg"
import iconSuccess from "../images/icon-success.svg";
import "./css/newsletter.css"
 

function Newsletter(props) {
   const[emailError, setEmailError]=useState(false);

   function changeInput(e){
    props.setEmail(e.target.value);
    setEmailError(false);
   }
  
  function validateEmail(e){
    e.preventDefault();
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email) && props.email.length > 0) {
      props.setSuccess(false);
      return true;
  } else {
      
      setEmailError(true);
      return false;

  }
}

  return (
    <div className="neswletterComponent"> 
    {
       (window.innerWidth < 400 ) ? <img src={ MobileImage} className="mobileImage" alt="mobile"></img>
       : ""
    }
        
    <main>
      
        <h1>
            Stay updated!
        </h1>
        
    <p>
        Join 60,000+ product managers receiving monthly updates on:
    </p>
  <ul className="ulList">
    <li> 
    <img src={iconSuccess} className="iconSuccess" alt="icon success"></img>
    <p>Product discovery and building what matters</p></li>
    <li> 
    <img src={iconSuccess} className="iconSuccess" alt="icon success"></img>       
     <p>Measuring to ensure updates are a success</p></li>
    <li> 
    <img src={iconSuccess} className="iconSuccess" alt="icon success"></img>       
     <p> And much more!</p> </li>
  </ul>
  
  <form>
    <div className="formLabel">
    <label className="formLabel">
        Email address
    </label>
    {emailError ? <p className="errorMessage">Valid email required</p> : ""}
    </div>
<input className={emailError ? "errorFormInput" : "formInput"} type='text' id="email" name="email" onChange={(e) => changeInput(e)} placeholder="email@company.com"  ></input>
    
    <button className="formButton" onClick={(e) => validateEmail(e)}>Subscribe to monthly newsletter</button>
  </form>
  
    
    </main>
    {
       (window.innerWidth > 400 ) ? <img src={ Image} className="image"  alt="desktop"></img>
       : ""
    }
    
   
  </div>
  )
}

export default Newsletter