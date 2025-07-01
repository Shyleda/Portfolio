import React from 'react';
import './Skills.css';

const skills = [
  {
    category: 'Languages',
    items: ['C/C++', 'Python', 'Bash', 'JavaScript', 'HTML/CSS'],
  },
  {
    category: 'Tools & Frameworks',
    items: ['Crypto++', 'Scapy', 'Nmap', 'Burp Suite', 'Wireshark', 'Metasploit', 'React.js'],
  },
  {
    category: 'Platforms',
    items: ['Wazuh', 'DVWA', 'OWASP ZAP', 'Security Onion', 'Nessus'],
  },
  {
    category: 'Cloud/DBs',
    items: ['AWS (EC2, S3)', 'MongoDB', 'Firebase', 'MySQL'],
  },
  {
    category: 'Virtualization',
    items: ['Docker', 'VirtualBox', 'VMware'],
  },
  {
    category: 'OS',
    items: ['Ubuntu', 'Kali Linux', 'Windows Server'],
  },
];

const Skills = () => (
  <section className="skills-section" id="skills">
    <h2 className="section-title">Skills</h2>
    <div className="skills-grid">
      {skills.map((skill, idx) => (
        <div className="skill-category" key={idx}>
          <h3 className="skill-title">{skill.category}</h3>
          <ul className="skill-list">
            {skill.items.map((item, i) => (
              <li className="skill-item" key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills; 