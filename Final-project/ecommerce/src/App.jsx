import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import ProductSlider from './component/owl-slider/ProductSlider'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <ProductSlider></ProductSlider>
    </>
  )
}

export default App
