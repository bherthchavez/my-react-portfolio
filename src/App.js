import React from "react";
import Navbar from './components/Navbar';
import Head from './components/Head';
import About from './components/About';

function App() {
  return (
    <div className="font-mono">
     <Navbar />
      <Head />
      <About />
    </div>
  );
}

export default App;
