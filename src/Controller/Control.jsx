import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../component/Layout/Layout';
import Home from '../component/Home/Home';
import About from '../component/About/About';
import Contact from '../component/Contact/Contact';

function Control() {
    const router=createBrowserRouter([
        {
            path:'/',
            element: <Layout />,
            children:[
                {
                    path:'',
                    element: <Home />
                },
                {
                    path:'about',
                    element: <About />
                },
                {
                    path:'contact',
                    element: <Contact />
                },
                {
                    path:'gitHub',
                    element: <Contact />
                }
            ]
        }
    ]);
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Control
