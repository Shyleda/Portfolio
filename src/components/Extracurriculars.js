import React from 'react';
import './Extracurriculars.css';

const Extracurriculars = () => (
  <section className="extracurriculars-section" id="extracurriculars">
    <h2 className="section-title">Extracurriculars</h2>
    <div className="extracurriculars-card">
      <div className="extracurriculars-org">[Organization Name]</div>
      <div className="extracurriculars-role">Role: <span className="extracurriculars-placeholder">[Role]</span></div>
      <div className="extracurriculars-certificate">Certificate: <span className="extracurriculars-placeholder">[Participation Certificate]</span></div>
    </div>
  </section>
);

export default Extracurriculars; 