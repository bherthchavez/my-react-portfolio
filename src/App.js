import React from "react";
import Navbar from './components/Navbar';
import Head from './components/Head';
import About from './components/About';
import Side from './components/Side'

function App() {
  return (
    <div className="font-mono">
     <Navbar />
      <Head />
      <About />
      <Side />
    </div>
  );
}

export default App;
