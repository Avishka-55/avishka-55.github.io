import React from 'react';
import NavBar from './components/NavBar/NavBar';
import  Intro  from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import Education from './components/Education/Education';



function App() {
  return (
    <div>
    <NavBar /> 
    <Intro />
    <Skills />
    <Education/>
    <Works />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
