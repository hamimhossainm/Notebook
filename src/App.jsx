import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Root/RootLayout'
import Home from './Pages/Home'
import Taskview from './Pages/Taskview'
import Contact from './Pages/Contact'
import 'react-toastify/dist/ReactToastify.css';




function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout/>}>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/taskview' element={<Taskview/>}> </Route>
          <Route path='/contact' element={<Contact/>}> </Route>
        </Route>
      </Route>
    )
  )

  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
