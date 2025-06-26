
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Hero from './Hero';
import About from './About';
import Objectives from './Objectives';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="ml-0 lg:ml-280 flex-1 min-h-screen w-full">
          <Hero />
          <About />
          <Objectives />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
