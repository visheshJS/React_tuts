import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // isme default value deni hoti hai kuch bhi
  let [counter,setCounter]=useState(15)

  // let counter =17;

  const addValue= () => {
    // console.log("value added",Math.round(Math.random()*100)/100);
    // console.log("clicked",Math.round(Math.random()*100)/100)
    // counter =counter+1;
    if(counter<20){
      setCounter(counter+1)
    }
    
    // console.log("clicked",counter);
    
  }
  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
    

  };
    
    
    

  
  

  return (
    <>
      <h1>Chai aur react hooks</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value : {counter}</button>
      <br />
      <button 
      onClick={removeValue}>Remove value : {counter}</button>
    </>
  )
}

export default App
