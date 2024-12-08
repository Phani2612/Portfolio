import React, { useState } from 'react';
import './skills.css';

function Skills() {
  // Using state to store the value of each range input
  const [htmlValue, setHtmlValue] = useState(85);
  const [cssValue, setCssValue] = useState(85);
  const [jsValue, setJsValue] = useState(80);
  const [mernValue, setMernValue] = useState(75);
  const [pythonValue, setPythonValue] = useState(70);
  const [chatgptValue, setChatgptValue] = useState(90);
  const [nextjsValue, setNextjsValue] = useState(65);
  const [gitValue, setGitValue] = useState(80);

  return (
    <div className='skills-container'>
      <text>My speciality</text>
      <h3>My Skills</h3>
      <p>
        Below are my skills, which I have developed through dedicated learning and practice. I am continuously exploring new technologies and striving to deepen my knowledge in each area. My commitment to growth ensures I stay updated with industry trends and enhance my expertise to tackle new challenges effectively.
      </p>

      <div className='skill-range'>
        <div id='range-con'>
          <label>HTML</label>
          <input
            type='range'
            min={0}
            max={100}
            value={htmlValue}
            onChange={(e) => setHtmlValue(e.target.value)}
            id='range-input'
          />
          <span>{htmlValue}%</span> {/* Display value */}
        </div>

        <div id='range-con'>
          <label>CSS</label>
          <input
            type='range'
            min={0}
            max={100}
            value={cssValue}
            onChange={(e) => setCssValue(e.target.value)}
            id='range-input'
          />
          <span>{cssValue}%</span> {/* Display value */}
        </div>

        <div id='range-con'>
          <label>JavaScript</label>
          <input
            type='range'
            min={0}
            max={100}
            value={jsValue}
            onChange={(e) => setJsValue(e.target.value)}
            id='range-input'
          />
          <span>{jsValue}%</span> {/* Display value */}
        </div>

        <div id='range-con'>
          <label>MERN Stack</label>
          <input
            type='range'
            min={0}
            max={100}
            value={mernValue}
            onChange={(e) => setMernValue(e.target.value)}
            id='range-input'
          />
          <span>{mernValue}%</span> {/* Display value */}
        </div>

        <div id='range-con'>
          <label>Python</label>
          <input
            type='range'
            min={0}
            max={100}
            value={pythonValue}
            onChange={(e) => setPythonValue(e.target.value)}
            id='range-input'
          />
          <span>{pythonValue}%</span> {/* Display value */}
        </div>

        <div id='range-con'>
          <label>ChatGPT</label>
          <input
            type='range'
            min={0}
            max={100}
            value={chatgptValue}
            onChange={(e) => setChatgptValue(e.target.value)}
            id='range-input'
          />
          <span>{chatgptValue}%</span> {/* Display value */}
        </div>

        <div id='range-con'>
          <label>Next.js</label>
          <input
            type='range'
            min={0}
            max={100}
            value={nextjsValue}
            onChange={(e) => setNextjsValue(e.target.value)}
            id='range-input'
          />
          <span>{nextjsValue}%</span> {/* Display value */}
        </div>

        <div id='range-con'>
          <label>Git/Github</label>
          <input
            type='range'
            min={0}
            max={100}
            value={gitValue}
            onChange={(e) => setGitValue(e.target.value)}
            id='range-input'
          />
          <span>{gitValue}%</span> {/* Display value */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
