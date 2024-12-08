import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about-con' >

<text>About Me</text>

<h1>WHO AM I?</h1>

<p>I'm Phani Naidu, a passionate Full Stack Software Developer with hands-on experience in the dynamic world of MERN stack development. With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I am dedicated to leveraging my skills to contribute to innovative projects in the tech industry.</p>

<p>Driven by a relentless curiosity and a hunger for continuous improvement, I stay at the forefront of emerging technologies, constantly honing my craft as a developer. Whether it's crafting seamless user experiences with React or building robust backend solutions with Node.js, I'm always up for the challenge.</p>


<div className='containers' >

  <div id='cont-1' >

<img  src='/mern.png'  id='mern-logo' />

<h3>Full stack web development</h3>

  </div>



  <div id='cont-1' >

<img  src='/chatgpt.png'  id='mern-logo' />

<h3>ChatGPT</h3>

  </div>



  <div id='cont-1' >

<img  src='/deployment.webp'  id='mern-logo' />

<h4>Vercel,nginx(SSH),render</h4>

  </div>






  <div id='cont-1' >

  <img  src='/python.jpg'  id='mern-logo' />

<h3>Python , DSA</h3>

</div>





</div>


    </div>
  )
}

export default About