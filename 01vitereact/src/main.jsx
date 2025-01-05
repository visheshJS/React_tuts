import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

// function MyApp(){
//   return(
//     <div>
//       <h1>my app it is</h1>
//     </div>
//   )
// }

// const anotherElement =(
//   <a href='https://youtube.com' target='_blank'>visit youtube
//   </a>
// )

const anotherUser= "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  //iske baad variables aate hai tree banne ke baad
  anotherUser
)



createRoot(document.getElementById('root')).
render(
  // <StrictMode>
    // <App />
  // </StrictMode>,

  // <MyApp></MyApp>
  // MyApp()    //aise bhi chala sakte hain

  // anotherElement

  reactElement
)
