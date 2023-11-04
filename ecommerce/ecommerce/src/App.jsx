import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Catalog from './Components/Catalog/Catalog'
import Collection from './Components/Collection/Collection'
import Blog from './Components/Blog/Blog'
import Sales from './Components/Sales/Sales'
import ContactUs from './Components/ContactUs/ContactUs'
import Info from './Components/info/info'
import {Routes, Route} from "react-router-dom"

function App() {
  
  return (
    <>    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/sales' element={<Sales/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
      <Info/>
      
      
      
      
      
      
      {/* <ProductSlider></ProductSlider> */}
    </>
  )
}

export default App
