import React,{useState,useContext, useTransition} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const {setUser}=useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username,password})



    }
  return (
    <div>
        <h2 className='text-white'>Log-In</h2>
        <input type="text"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='username'  />
        {"  "}
        <input type="text"
        value={password}
        onChange={(e)=> setPassword(e.target.value)} 
        placeholder='password'  />
        <button className='text-white border-black ml-4 w-[60px] h-[26px] rounded-md bg-red-300' onClick={handleSubmit}>Submit</button>
      
    </div>
  )
}

export default Login;
