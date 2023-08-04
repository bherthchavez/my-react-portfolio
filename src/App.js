import About from './components/About';
import Head from './components/Head';
import Navbar from './components/Navbar';
import Side from './components/Side';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="font-mono bg-[#282c34]">
        <Navbar />
        <Side />
        <Head />
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
      
    </>
  );
}

export default App;
