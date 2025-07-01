import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Internship from './components/Internship';
import Extracurriculars from './components/Extracurriculars';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Internship />
      <Extracurriculars />
      <Footer />
    </div>
  );
}

export default App;
