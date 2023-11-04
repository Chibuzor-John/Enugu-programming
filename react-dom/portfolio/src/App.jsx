import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import About from './Component/About/About'


function App() {
  const [count, setCount] = useState(0)

  function App() {
    return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route/>
          <Route/>
        </Routes>
        <Home/>
        <About/>
        <Contact/>
        <Article/>
      </>
    )
  }
  
}

export default App
