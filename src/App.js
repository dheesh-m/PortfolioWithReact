import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const slideInElements = document.querySelectorAll('.slide-in');
    slideInElements.forEach((el) => observer.observe(el));

    return () => {
      slideInElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;