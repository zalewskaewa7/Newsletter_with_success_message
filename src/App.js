import React , {useState } from 'react';
import './App.css';
import Newsletter from "../src/components/Newsletter";
import Success from "../src/components/success";

function App() {
  const[success, setSuccess]=useState(true);
  const[email, setEmail]=useState("");
  return (
    <div className="App">
      {
        success ? <Newsletter setSuccess={setSuccess} setEmail={setEmail} email={email}/> : <Success email={email}  setSuccess={setSuccess}/>
      }
    </div>
  );
}

export default App;
