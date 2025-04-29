import React, { useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Myprojects from './sections/Myprojects';
import Resume from './sections/Resume';

const App = () => {
  const scrollRef = useRef(null);
  

  return (
    <div className="">
      {/* Always show the Navbar */}
      <Navbar />
      
      {/* Routes to switch between different pages */}
      <Routes>
        {/* Default route to show main sections */}
        <Route path="/" element={
          <main className="max-w-7xl mx-auto">
            <Hero />
            <About />
            <Contact />
            <Footer />
          </main>
        } />

        {/* Route to render Myprojects component */}
        <Route path="/myprojects" element={<Myprojects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
