import React from 'react'
import "./css/success.css";
import iconSuccess from "../images/icon-success.svg";


function success(props) {
  function changeSuccessState( ){
    props.setSuccess(true)
  }

  return (
    <div className="successComponent">
            <img src={iconSuccess} className="iconSuccessComponent" alt="icon success"></img>
            <h1>Thanks for subscribing!</h1>
            <p>
                A confirmation email has been sent to <b> {props.email}</b>. Please open it and click the button inside to confirm your subscription.
            </p>
            <button className="buttonSuccessComponent" onClick={() => changeSuccessState()}>Dismiss message</button>
    </div>
  )
}

export default success