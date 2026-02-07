import React from "react";

export default function Projects({ projects = [] }) {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* SAFE tags rendering */}
                {project.tags && (
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-links">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link project-link-secondary"
                  >
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
