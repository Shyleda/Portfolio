import React from 'react';
import './Education.css';

const Education = () => (
  <section className="education-section" id="education">
    <h2 className="section-title">Education</h2>
    <div className="education-list">
      <div className="education-item">
        <div className="edu-institution">Vellore Institute Of Technology (Bhopal)</div>
        <div className="edu-degree">BTech+MTech Integrated in Cybersecurity <span className="edu-years">(2021–Present)</span></div>
        <div className="edu-grade">CGPA: <span className="neon-green">7.8</span></div>
      </div>
      <div className="education-item">
        <div className="edu-institution">Aligarh Muslim University (Aligarh)</div>
        <div className="edu-degree">Intermediate - PCM <span className="edu-years">(2018–2020)</span></div>
        <div className="edu-grade">Percentage: <span className="neon-blue">69%</span></div>
      </div>
    </div>
  </section>
);

export default Education; 