import React from "react";

export default function Skills({ skills }) {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build modern web applications
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-category">{skill.category}</h3>
              <div className="skill-items">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
