import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero-section reveal" id="hero-section">
    <div className="hero-terminal">
      <div className="hero-header">
        <span className="hero-dot green"></span>
        <span className="hero-dot blue"></span>
        <span className="hero-dot neon"></span>
      </div>
      <div className="hero-content">
        <h1 className="glitch" data-text="Syed Ahmad Ali">Syed Ahmad Ali</h1>
        <h2>Cybersecurity Enthusiast | Malware Analyst | SOC Trainee</h2>
        <p className="hero-location">Aligarh, Uttar Pradesh, India</p>
        <div className="hero-contact">
          <span>📞 +91-8057811388</span>
          <span>✉️ syedali0571@gmail.com</span>
        </div>
        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/syedali0571/" className="linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/syedali0571" className="github" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://tryhackme.com/p/syedali0571" className="tryhackme" target="_blank" rel="noopener noreferrer">TryHackMe</a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero; 