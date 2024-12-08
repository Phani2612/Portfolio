import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">Feel free to reach out to me for collaborations, queries, or just a friendly hello!</p>

      <div className="contact-info">
        {/* Mobile Number */}
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <div className="contact-text">
            <h3>Mobile Number</h3>
            <p>+91 8464012612</p>
          </div>
        </div>

        {/* Email ID */}
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <div className="contact-text">
            <h3>Email</h3>
            <p>
              <a href="mailto:youremail@example.com" className="email-link">phanidimple258@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          <div className="contact-text">
            <h3>Address</h3>
            <p>Door no 203 Silver springs apartment , Near vignan school , KTPS Palwancha , Bhadradri Kothagudem , 507115 , Telangana</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ContactPage;
