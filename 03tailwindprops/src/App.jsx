import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-white text-purple-500 
     p-3 rounded-lg'>Tailwind Test</h1>
     <Card></Card>
     <Card></Card>

    </>
  )
}

export default App
