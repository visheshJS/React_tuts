import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter, createRoutesFromElements,Route } 
from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contacts/contacts.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'






const router=createBrowserRouter([
  { 
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'About',
        element:<About/>
      },
      {
        path:'Contact',
        element:<Contact/>
      },
      {
        path:'Github',
        element:<Github/>,
        loader:githubInfoLoader, 
      },
      {
        path:'user/:id',
        element:<User/>
      },
      
      

    ]
  }
])

// const router= createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}> 
//       <Route path='' element={<Home/>}/ >
//       <Route path='About' element={<About/>}/ >
//       <Route path='Contact' element={<Contact/>}/ >
//       <Route path='Github' element={<Github/>}/ >



//     </Route>
    

//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
