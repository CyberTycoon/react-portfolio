import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Technologies from './Components/Technologies'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'



function App() {

  return (
    
   
      
       <div className='mx-auto px-3
        md:px-3 bg-gradient-to-r from-black via-black to-black'>
       <div className='w-50 top-0 -z-10 h-full lg:w-full px-16'>
       <Navbar/>
       <Hero/>
       <About/>
       <Technologies/>
       <Experience/>
       <Projects/>
       <Contact/>
       </div>
       </div>
      
       
      
   
  )
}

export default App
