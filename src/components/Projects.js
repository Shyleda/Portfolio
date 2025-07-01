import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Secure File Vault',
    description: 'Built AES-256 encrypted CLI file locker with SHA-256 master password.',
    tools: ['C++', 'Crypto++', 'Linux'],
  },
  {
    name: 'Vulnerable Web App Pentest Lab',
    description: 'Simulated OWASP Top 10 attacks and reported remediation.',
    tools: ['DVWA', 'Burp Suite', 'MySQL'],
  },
  {
    name: 'SOC Analyst Virtual Home Lab',
    description: 'Simulated SOC setup for incident monitoring and response.',
    tools: ['Wazuh', 'ELK Stack', 'Linux'],
  },
];

const Projects = () => (
  <section className="projects-section" id="projects">
    <h2 className="section-title">Projects</h2>
    <div className="projects-list">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <h3 className="project-title">{project.name}</h3>
          <p className="project-desc">{project.description}</p>
          <div className="project-tools">
            {project.tools.map((tool, i) => (
              <span className="project-tool" key={i}>{tool}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 