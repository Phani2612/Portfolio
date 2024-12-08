import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Hamburger Icon for Mobile View */}
      <div className={`hamburger ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        &#9776; {/* Unicode character for hamburger icon */}
      </div>

      {/* Sidebar with Links */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="profile">
          <img src="/phani.jpg" alt="Profile" className="profile-pic" />
          <h2 className="profile-name">K Phani Naidu</h2>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
