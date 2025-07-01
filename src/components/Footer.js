import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer-section" id="footer-section">
    <div className="footer-content">
      <div className="footer-contact">
        <span>✉️ syedali0571@gmail.com</span>
        <span>📞 +91-8057811388</span>
      </div>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/syedali0571/" className="linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/syedali0571" className="github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://tryhackme.com/p/syedali0571" className="tryhackme" target="_blank" rel="noopener noreferrer">TryHackMe</a>
      </div>
      <div className="footer-copyright">
        © 2025 Syed Ahmad Ali
      </div>
    </div>
  </footer>
);

export default Footer; 