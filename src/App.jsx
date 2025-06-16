import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'

function App() {


  return (
    <>

     <Navbar />
     <Main />
     <About />
     <Skills />
     <Education />
     <Projects />

    </>
  )
}

export default App
