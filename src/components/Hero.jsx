import React from "react";

export default function Hero({ profileImg }) {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          {/* Circular Profile Image */}
          <div className="hero-image-circle">
            <div className="profile-circle">
              <img src={profileImg} alt="Dheeraj Srivastava" />
              <div className="profile-ring"></div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="hero-text">
            <span className="hero-greeting">Hi there, I'm</span>
            <h1 className="hero-name">Dheeraj Srivastava</h1>
            <h2 className="hero-role">
              <span className="gradient-text">React JS Frontend Developer</span>
              <br />
              <span className="hero-role-sub">& Full Stack Engineer</span>
            </h2>
            
            <p className="hero-description">
              MCA Graduate passionate about crafting responsive, scalable, and 
              user-centric web applications. I transform ideas into elegant digital 
              experiences using modern JavaScript and React.
            </p>

            <div className="hero-cta">
              <a href="/Dheeraj_ Resume_MERN.pdf" className="btn btn-primary" download>
                <span>Download Resume</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 12L3 7L4.4 5.6L7 8.2V0H9V8.2L11.6 5.6L13 7L8 12Z" fill="currentColor"/>
                  <path d="M0 14H16V16H0V14Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://github.com/Dheeraj-cre" 
                 target="_blank" 
                 rel="noreferrer" 
                 className="btn btn-secondary">
                <span>View GitHub</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/dheerajsri" 
                 target="_blank" 
                 rel="noreferrer"
                 className="btn btn-secondary">
                <span>LinkedIn</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill="currentColor"/>
                </svg>
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
