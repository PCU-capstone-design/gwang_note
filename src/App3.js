import logo from './logo.svg';
import './App3.css';
import Timer from './App2'
import React, { useState } from 'react';

function App(){
    const [showtimer, settimer]= useState(false);
    return(
      <div>
        {showtimer&&<Timer/>}
        <button onClick={() => setTimer(!showTimer)}>toggle Timer</button>    
      </div>  
    );
    
}
export default App3;