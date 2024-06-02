import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Game from './pages/Game'
import Aboutsec from './pages/Aboutsec'

const App = () => {
  return (
    <div>
      <Toaster/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Aboutsec' element={<Aboutsec/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/Game' element={<Game/>}/>
      </Routes>
    </div>
  )
}

export default App