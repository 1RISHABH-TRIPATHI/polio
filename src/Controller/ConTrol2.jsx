import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../component/Layout/Layout'
import Home from '../component/Home/Home'
import About from '../component/About/About'
import Contact from '../component/Contact/Contact'

function ConTrol2() {
    const router=createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />} >
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
            </Route>
        )
    )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default ConTrol2
