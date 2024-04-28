import React from 'react';
import './Contact.css';
import Creator1Image from './creator1.jpg'; 
import Creator2Image from './creator2.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="creators">

        <div className="creator">
          <img src={Creator1Image} alt="Creator 1" />
          <div className="creator-details">
            <h2>Wajeeh Alam</h2>
            <p>
              I am a self-taught aspiring Computer Engineer! Currently, I'm learning React.js and Express.js and I'm using this project to learn more about them!
              My GitHub and other social links are down below if you want to see more about me or contact me! P.S  it was super fun making this project :D
            </p>
            <div className="social-links">
              <a href="https://github.com/Mr-W-Squidward" target="_blank"><FontAwesomeIcon icon={faGithub} /><i className="github"></i></a>
              <a href="https://www.linkedin.com/in/wajeeh-alam-9442b82bb/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><i className="linkedin"></i></a>
              <a href="https://www.instagram.com/wajeehthebaji/" target="_blank"><FontAwesomeIcon icon={faInstagram} /><i className="instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="creator">
          <img src={Creator2Image} alt="Creator 2" />
          <div className="creator-details">
            <h2>Raiyan Islam</h2>
            <p>
              I am a poo, I don't like this but Wajeeh forced me to do this, hope you like it ig
            </p>
            <div className="social-links">
              <a href="https://github.com/Mr-W-Squidward" target="_blank"><FontAwesomeIcon icon={faGithub} /><i className="github"></i></a>
              <a href="https://www.linkedin.com/in/wajeeh-alam-9442b82bb/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><i className="linkedin"></i></a>
              <a href="https://www.instagram.com/wajeehthebaji/" target="_blank"><FontAwesomeIcon icon={faInstagram} /><i className="instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
