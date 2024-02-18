import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../component/Layout/Layout'
import Home from '../component/Home/Home'
import About from '../component/About/About'
import Contact from '../component/Contact/Contact'
function Control3() {
  return (
    <div>
        <BrowserRouter>
        <Routes  >
        <Route path='/' element={<Layout />} >
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Control3
