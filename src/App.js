import React, { useState, useEffect } from "react";
import "./App.css";
import Getdata from "./components/Getdata";


export default function App() {
  const [count, setCount] = useState(1);

  const prevNavigation = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const random = () => {
    let randomNumber = Math.floor(Math.random() * 99);
    setCount(randomNumber);
  };

  return (
    <div className="App">
      <h1>
         We are going on holiday!
      </h1>
      <div>
         <button onClick={random}>RANDOM</button>
      </div>
     
      <div className="border">
        <div id="card">
         <Getdata counter={count} />
         </div>
      </div>

    </div>
  );
}


  
