import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import './Experience.css';

const Experience = () => {
  const [showExperience1, setShowExperience1] = useState(false);
  const [showExperience2, setShowExperience2] = useState(false);
  const [showInternship, setShowInternship] = useState(false);

  return (
    <div className="experience-container">
      <h2 className="section-title">Experience</h2>

      {/* Experience 1 */}
      <div
        className={`experience-box ${showExperience1 ? "expanded" : ""}`}
        onClick={() => setShowExperience1(!showExperience1)}
      >
        <div className="experience-header">
          <h3>DXC Technology</h3>
          <FontAwesomeIcon
            icon={showExperience1 ? faChevronUp : faChevronDown}
            className="toggle-icon"
          />
        </div>
        <p className="role">IT Analyst (2022 - 2023)</p>

        {showExperience1 && (
          <div className="experience-details">
            <p>
              <strong>Key Responsibilities:</strong>
            </p>
            <ul>
              <li>
                Taking ownership of customer issues and ensuring customer needs are met.
              </li>
              <li>
                Assisting customers with technical problems related to software, hardware, and applications.
              </li>
              <li>
                Researching, diagnosing, troubleshooting, and resolving system issues.
              </li>
              <li>
                Following up with customers to ensure issues are resolved within agreed-upon time frames.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Experience 2 */}
      <div
        className={`experience-box ${showExperience2 ? "expanded" : ""}`}
        onClick={() => setShowExperience2(!showExperience2)}
      >
        <div className="experience-header">
          <h3>4necotech</h3>
          <FontAwesomeIcon
            icon={showExperience2 ? faChevronUp : faChevronDown}
            className="toggle-icon"
          />
        </div>
        <p className="role">Full Stack Developer (June 2024 - Oct 2024)</p>
        <p className="technology">Technology: MERN Stack</p>
        <p className="projects">Projects: URL Shortener, E-commerce Website</p>

        {showExperience2 && (
          <div className="experience-details">
            <ul>
              <li>
                Worked with a full stack development team to build scalable and efficient web applications.
              </li>
              <li>
                Developed both frontend and backend features using MERN stack.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Internship Experience */}
      <div
        className={`experience-box ${showInternship ? "expanded" : ""}`}
        onClick={() => setShowInternship(!showInternship)}
      >
        <div className="experience-header">
          <h3>Learnbay</h3>
          <FontAwesomeIcon
            icon={showInternship ? faChevronUp : faChevronDown}
            className="toggle-icon"
          />
        </div>
        <p className="role">Full Stack Software Development Intern (2023 - 2024)</p>
        <p className="skills">Skills: Python, DSA, System Design, MERN Stack</p>

        {showInternship && (
          <div className="experience-details">
            <ul>
              <li>Worked on multiple full-stack development projects using MERN stack.</li>
              <li>Enhanced problem-solving skills in DSA and gained deep insights into system design.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
