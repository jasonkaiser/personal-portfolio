import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Intro from './components/Intro'
import Experience from './components/Experience'

function App() {
  
  return (
    <>
      <Intro />
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
