import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    if (!data) {
        return <p>Loading or no data available...</p>;
    }

    // const[data,setData]=useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/visheshjs')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })

      
    // },[])
    
  return (
    <div className='flex flex-col bg-white justify-center items-center py-4'>
        <img src={data.avatar_url} alt="Git picture" className='w-[300px]
         border-black border-4 rounded-2xl mt-6' />
        <div className='text-center py-10 m-4 text-black font-bold p-4 text-3xl'>Github followers:{data?.followers||'No data available'}
        </div>

    </div>
    
    
  );
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json()
// }

export const githubInfoLoader = async ()=>{
    const response= await fetch('https://api.github.com/users/visheshjs')
    return response.json();

}