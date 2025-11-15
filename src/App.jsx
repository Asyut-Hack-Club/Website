import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About Us/About'
import { Routes, Route } from 'react-router'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about-us' element={<About/>} />
    </Routes>
  )
}

export default App