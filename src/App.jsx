import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='bg-[#171b32] h-auto w-full overflow-hidden'>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects/>
      <Footer /> 
    </div>
  )
}

export default App