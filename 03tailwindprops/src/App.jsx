import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj={
    username:"vishesh",
    rank:1
  }

  let newAR=[1,2,3];

  return (
    <>
     <h1 className='bg-white text-purple-500 
     p-3 rounded-lg'>Tailwind Test</h1>
     <Card username="vishesh" btntext="click me"/>
     <Card username="aman" />//isme button ki value nhi di to default use hojaega 

    </>
  )
}

export default App
