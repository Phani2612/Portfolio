import React from 'react';
import Home from './Home';
import About from './About';
import './Dashboard.css';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';

import ContactPage from './Contact';

function Dasboard() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills/>
      </section>


      <section id="education">
        
        <Education/>
      </section>

      <section id="experience">
        
       <Experience/>
      </section>


      <section id="projects">
        
        <Project/>
       </section>


       <section id="contact">
        
       <ContactPage/>

       </section>


    </div>
  );
}

export default Dasboard;
