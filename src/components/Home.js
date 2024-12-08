import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const Mydata = ["Hi! I am Phani Naidu", "I am a web developer"];
  const Myimage = ['/my.jpg', '/my2.jpg'];

  const [currentIndex, setCurrentIndex] = useState(0); // Single index to control both text and image
  const [fadeClass, setFadeClass] = useState(''); // Class for fade-in effect

  useEffect(() => {
    // Update the fade-in class whenever the index changes
    setFadeClass('fade-in');
    const timeout = setTimeout(() => setFadeClass(''), 1000); // Remove the class after the transition duration

    // Set an interval to update the index every 4 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Mydata.length); // Wrap around to the first item
    }, 4000);

    // Cleanup the interval and timeout
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <div className={`home-con ${fadeClass}`}>
      <img src={Myimage[currentIndex]} alt="Current" id="home-image" />
      <h1 id="home-h1">{Mydata[currentIndex]}</h1>
    </div>
  );
}

export default Home;
