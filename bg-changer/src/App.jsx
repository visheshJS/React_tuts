import { useState } from "react"


function App() {
  const [color,setcolor]=useState("#333");

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      ></div>

      <div className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3
        shadow-lg  px-3 py-2 rounded-xl bg-slate-200"> 
        <button onClick={() => setcolor("#ef4444")} className="outline-none px-4 bg-red-500
        py-1 rounded-full text-white shadow-lg">
          Red
        </button>
        <button onClick={() => setcolor("#22c55e")} className="outline-none px-4 bg-green-500
        py-1 rounded-full text-white shadow-lg">
          Green
        </button>
        <button onClick={() => setcolor("#3b82f6")} className="outline-none px-4 bg-blue-500
        py-1 rounded-full text-white shadow-lg">
          Blue
        </button>
         </div>
       </div>
    </>
  )
}

export default App
