import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Page from './pages/SomePage/Page.jsx'
import Navbar from './components/navbar/Navbar.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Home />,
  },
  {
    path: "/page",
    element: 
    <Navbar>
      <Page />
    </Navbar>
    ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
