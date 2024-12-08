import React from 'react';
import './Project.css';

function Project() {
  return (
    <div className="project-container">
      <text>My work</text>
      <h3>Recent Work</h3>

      <div className="myprojects">
        <a
          href="https://netflix-frontend-fywf.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-img">
            <img
              src="/netflix.png"
              alt="Project 1"
              className="project-img-content"
            />
          </div>
          <div className="project-info">
            <h4>Full stack netflix clone</h4>
            <p>A full-stack Netflix clone built using the MERN stack. I utilized the TMDB API to display movies and implemented a feature where a box pops up when you move your mouse to the left side of the screen. Users can also watch movie trailers by clicking "Play", powered by the YouTube trailer library.</p>
          </div>
        </a>

        <a
          href="https://simplebooking.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-img">
            <img
              src="/movie.jpg"
              alt="Project 2"
              className="project-img-content"
            />
          </div>
          <div className="project-info">
            <h4>Full stack movie ticket booking application</h4>
            <p>A simple movie ticket booking application built for a single location. I established relationships between seats, showtimes, and theaters by designing tables for each entity. The app allows users to select seats, view available showtimes, and book tickets accordingly..</p>
          </div>
        </a>

        <a
          href="https://softwarelabsfrontend.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-img">
            <img
              src="/nolan.png"
              alt="Project 3"
              className="project-img-content"
            />
          </div>
          <div className="project-info">
            <h4>AI Script generation</h4>
            <p>A creative app inspired by Nolan AI that allows users to generate movie scripts using the Gemini AI model. Users can input prompts to create unique scripts, and they can also upload their own scripts for AI-based responses. The AI generates detailed responses or modifications based on the user's input, providing an interactive experience for scriptwriters and storytellers.</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Project;
