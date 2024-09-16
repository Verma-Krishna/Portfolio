import React from 'react'
import Header from './Component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Footer from './Component/Footer'
import About from './Component/About'
import Services from './Component/Services'
import Expertise from './Component/Expertise'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/expertise' element={<Expertise/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

