import React from "react";

export default function Experience({ experience }) {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((exp, i) => (
            <div key={i} className="experience-card">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
