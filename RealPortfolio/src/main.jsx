import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    render: () => <App/>
  },

]); 


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
