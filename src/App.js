import React from "react";
import Navbar from './components/Navbar';
import Head from './components/Head';
import About from './components/About';
import Side from './components/Side'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Projects from './components/Projects'

function App() {
  return (
    <div className="font-mono bg-[#282c34]">
     <Navbar />
     <Side />
      <Head />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
