import React from 'react';
import './Certifications.css';

const certifications = [
  { provider: 'Cisco', title: 'Introduction to Cybersecurity', status: '' },
  { provider: 'TryHackMe', title: 'Pre Security Path, Jr Penetration Tester Path', status: '' },
  { provider: 'Fortinet', title: 'NSE 1, NSE 2, NSE 3', status: 'in progress' },
];

const Certifications = () => (
  <section className="certifications-section" id="certifications">
    <h2 className="section-title">Certifications</h2>
    <div className="certifications-list">
      {certifications.map((cert, idx) => (
        <div className="cert-item" key={idx}>
          <span className="cert-provider">{cert.provider}</span>
          <span className="cert-title">{cert.title}</span>
          {cert.status && <span className="cert-status">({cert.status})</span>}
        </div>
      ))}
    </div>
  </section>
);

export default Certifications; 