import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const[text, settext] = useState("");
  
     function changehandle(event){
     console.log(text); 
     settext(event.target.value); 
     }

  return (
    <div className="App">
    <input type="text" onChange={changehandle}></input>
    </div>
  );
}

export default App;
