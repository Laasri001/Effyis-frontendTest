import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Page from './pages/SomePage/Page'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='app'>
      <Navbar />
    </div>
  )
}

export default App
