import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // isme default value deni hoti hai kuch bhi
  const [counter,setCounter]=useState(15)

  // let counter =17;

  const addValue= () => {
    // console.log("value added",Math.round(Math.random()*100)/100);
    // console.log("clicked",Math.round(Math.random()*100)/100)
    // counter =counter+1;
    // if(counter<20){
    //   setCounter(counter+1)
    // }
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    /* IMP STUFF
    and ye sab ek hi kaam ko kar rahe hote , every setcounter thinks the same 
    thing and updates what is needed, isliye sirf ek hi baar update hote hai
    aise chaar baar same cheez ko execute krne par inka ek batch banjata hai
    
    ##BUT WHAT IF WE REALLY WANT TO DO THIS KIND OF THING KI 4 BAAR UPDATE HOJAYE

    setCounter(prev_counter => prev_counter + 1)
    setCounter(prev_counter => prev_counter + 1)
    setCounter(prev_counter => prev_counter + 1)
    setCounter(prev_counter => prev_counter + 1)
    
    */

    // console.log("clicked",counter);
    setCounter(prev_counter => prev_counter + 1)
    setCounter(prev_counter => prev_counter + 1)
    setCounter(prev_counter => prev_counter + 1)
    setCounter(prev_counter => prev_counter + 1)
    
  }
  const removeValue=()=>{
    // if(counter>0){
    //   setCounter(counter-1);
    // }
    setCounter(counter-1);
    

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
      <p>footer:{counter}</p>
    </>
  )
}

export default App
