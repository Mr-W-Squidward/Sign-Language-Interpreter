import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WebcamAccess from './components/Webcam'; 
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-box">
          <img src="../public/icon.jpeg" alt="Logo" className="logo" />
          <a href="/" className="site-name">Signer</a>
          <Navbar />
        </div>
      </header>

      <div className="info-container">
        <h1 className="info">Revolutionize Your Education With <span className="colorfulText">Signer</span></h1>
        <h1 className="info">Learn Sign Language Now</h1>
      </div>
      <div className="content">

        <section id="home" className="section">
          <h2>Home</h2>
          <p>Welcome to our American Sign Language Detector App!</p>
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="demo" className="section">
          <WebcamAccess />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
