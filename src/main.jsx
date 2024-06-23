import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Resume_Guide from './Component/Home/Resume_Guide.jsx'
import Aboutus from './Component/About-Us/Aboutus.jsx'
import Contact from './Component/Contact-Us/Contact.jsx'
import Login from './Component/Login/Login.jsx'
import Signup from './Component/Login/Signup.jsx'
const route =createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<App/>
      },
      {
        path:"templates",
        element:<Resume_Guide/>
      },
      {
        path:"about",
        element:<Aboutus/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"signup",
        element:<Signup/>
      }
      // {
      //   path:"slide/:id",
      //   element:<Slider_details/>
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={route}/>
    {/* <App /> */}
  </React.StrictMode>,
)
