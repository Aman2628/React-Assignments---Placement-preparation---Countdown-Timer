import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [val, setVal] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (val > 0) {
        setVal((val) => val - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [val]);

 const keyHandler = (e) => {
    if (e.keyCode === 13) {
      if (!isNaN(e.target.value) && e.target.value > 0)
        setVal(Math.trunc(e.target.value));
      else {
        setVal(0);
      }
    }
  };

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={keyHandler} /> sec.
        </h1>
      </div>
      <div id="current-time">{val}</div>
    </div>
  )
}


export default App;
