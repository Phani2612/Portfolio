import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./Education.css";

const Education = () => {
  const [showCollege, setShowCollege] = useState(false);

  const [showinter , setshowinter] = useState(false)

  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>

      <div
        id="college-con"
        className={showCollege ? "highlighted" : ""}
        onClick={() => setShowCollege(!showCollege)}
      >
        <h1>Bachelors of Technology</h1>
        <FontAwesomeIcon icon={showCollege ? faMinus : faPlus} />
      </div>

      {showCollege && (
        <div id="college-open">
          <h3>Guru Nanak institutions technical campus</h3>
          <h3>Mechanical Engineering</h3>
          
          <h3>2017 - 2021</h3>
          <h3>Percentage: 82%</h3>
        </div>
      )}








<div
        id="college-con"
        className={showinter ? "highlighted" : ""}
        onClick={() => setshowinter(!showinter)}
      >
        <h1>Higher Secondary Education</h1>
        <FontAwesomeIcon icon={showinter ? faMinus : faPlus} />
      </div>

      {showinter && (
        <div id="college-open">
           <h3>Narayana Junior college</h3> 
          <h3>MPC</h3>
          <h3>2015 - 2017</h3>
          <h3>Percentage: 95%</h3>
        </div>
      )}







    </div>
  );
};

export default Education;
