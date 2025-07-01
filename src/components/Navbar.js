import React, { useEffect, useState } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: 'hero-section' },
  { label: 'Education', to: 'education' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Internship', to: 'internship' },
  { label: 'Extracurriculars', to: 'extracurriculars' },
  { label: 'Contact', to: 'footer-section' },
];

const Navbar = () => {
  const [active, setActive] = useState('hero-section');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.getElementById(link.to);
        if (!el) return { id: link.to, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: link.to, top: Math.abs(rect.top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.id);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Syed Ahmad Ali</div>
      <div className={`navbar-hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.to} className={active === link.to ? 'active' : ''}>
            <button onClick={() => scrollToSection(link.to)}>{link.label}</button>
          </li>
        ))}
        <li className="navbar-socials-mobile">
          <a href="https://www.linkedin.com/in/syedali0571/" className="linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/syedali0571" className="github" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://tryhackme.com/p/syedali0571" className="tryhackme" target="_blank" rel="noopener noreferrer">TryHackMe</a>
        </li>
      </ul>
      <div className="navbar-socials">
        <a href="https://www.linkedin.com/in/syedali0571/" className="linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/syedali0571" className="github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://tryhackme.com/p/syedali0571" className="tryhackme" target="_blank" rel="noopener noreferrer">TryHackMe</a>
      </div>
    </nav>
  );
};

export default Navbar; 