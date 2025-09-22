import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import confetti from "canvas-confetti";



function App() {
    useEffect(() => {
        confetti({
      particleCount: 200,  
      spread: 70,         
      origin: { y: 0.6 }   
    });
    }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
