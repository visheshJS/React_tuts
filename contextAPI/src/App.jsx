import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1 className='text-white'>react with chai and share it..</h1>
      <Login/>
      <Profile/>

    
    
      

    </UserContextProvider>
  )
}

export default App
