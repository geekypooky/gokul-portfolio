import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="experience-heading">Experience & Achievements</h2>

      
      <div className="experience-section glass-effect">
        <h3 className="section-title">Internship</h3>
        <div className="experience-detail">
          <h4>Software Development & Analysis</h4>
          <p className="company">CIBIE, Pollachi <span className="duration">(Jun – Jul 2024)</span></p>
          <ul className="description-list">
            <li>Worked on database schema design and ERP module development.</li>
            <li>Performed SQL-based data analysis and reporting.</li>
            <li>Created and managed Entity-Relationship (ER) diagrams for database planning.</li>
          </ul>
        </div>
      </div>

     
      <div className="experience-section glass-effect">
        <h3 className="section-title">Achievements</h3>
        <ul className="description-list">
          <li> 11 trophies & 45+ badges on Microsoft Learn.</li>
          <li> 26+ specialized certifications in AI, ML, and Data Science.</li>
          <li> IBM Certified: AI Fundamentals, Data Fundamentals, Big Data.</li>
          <li> Accenture iAspire Gold level winner.</li>
          <li> 10+ AI/ML awards at college-level competitions.</li>
        </ul>
      </div>

     
      <div className="experience-section glass-effect">
        <h3 className="section-title">Activities</h3>
        <ul className="description-list">
          <li>Participated in national and international hackathons.</li>
          <li> Engaged in Kaggle competitions with real-world AI problem solving.</li>
          <li>Contributed to open-source AI/ML and developer tooling communities.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
