import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Notfound from './Components/Notfound/Notfound'
import Portfolio from './Components/Portfolio/Portfolio'
export default function App() {


 let routers = createBrowserRouter([{
    path:'' ,element:<Layout/>,children:[
      { index:true,element:<Home/>},
      { path:"/",element:<Home/>},
      { path:"portfolio",element:<Portfolio/>},
      { path:"contact",element:<Contact/>},
      { path:"*",element:<Notfound/>},
    ]
  }])


  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    
    </>
  )
}
