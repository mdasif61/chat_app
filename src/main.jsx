import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';

const router=createBrowserRouter([
  {
    path:'/',
    element:<HomePage></HomePage>,
    children:[
      {
        path:'/',
        element:<Login/>,
      },
      {
        path:'/signup',
        element:<Signup/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
