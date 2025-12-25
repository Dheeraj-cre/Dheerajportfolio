import React from "react";
import "./style.css";

export default function Portfolio() {
  const toggleTheme = () => {
    document.body.classList.toggle("light");
  };

  return (
    <div className="container">

      <div className="toggle" onClick={toggleTheme}>🌗 Theme</div>

      {/* Hero */}
      <section className="hero">
        <h1>Dheeraj Srivastava</h1>
        <p>React JS Frontend & Full Stack Developer</p>
        <p>MCA Graduate | Frontend Developer | Creative Problem Solver
I love building user-centric web apps with React.js, JavaScript, Css, clean UI and 
          passionate Web Developer skilled in building
          responsive, scalable, and user-friendly web applications.
        </p>

        <div className="links">
          <a href="https://github.com/Dheeraj-cre" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/dheerajsri" target="_blank">LinkedIn</a>
        </div>

        <a href="/Dheeraj_Resume.pdf" className="btn" download>Download Resume</a>
      </section>

      {/* Skills */}
<section className="section">
  <h2>Skills</h2>

  <div className="skills-list">
    <div className="skill-row">
      <strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS
    </div>

    <div className="skill-row">
      <strong>Backend:</strong> Node.js, Express.js, RESTful APIs
    </div>

    <div className="skill-row">
      <strong>Database:</strong> MySQL, MongoDB
    </div>

    <div className="skill-row">
      <strong>Tools & Platforms:</strong> Git, GitHub, Postman, VS Code
    </div>

    <div className="skill-row">
      <strong>Others:</strong> UI/UX Principles, Python, Deployment (Netlify / Render)
    </div>

    <div className="skill-row">
      <strong>Soft Skills:</strong> Problem-Solving, Teamwork, Clean Code, Communication
    </div>
  </div>
</section>


      {/* Experience */}
      <section className="section">
        <h2>Experience</h2>
        <div className="card">
          <h3>Frontend Developer Intern – V.EDU Pvt. Ltd.</h3>
          <p>Feb 2024 – May 2024 (Remote)</p>
          <ul>
            <li>Developed 20+ responsive UI components</li>
            <li>Improved load time by 15%</li>
            <li>Fixed UI/UX issues for better performance</li>
          </ul>
        </div>
      </section>

{/* Projects */}
<section className="section">
  <h2>Projects</h2>
  <div className="grid">

    <div className="card">
      <h3>University Management System</h3>
      <p>Full-stack MERN + MySQL system with JWT authentication.</p>

      <div className="project-actions">
        <a className="btn" href="https://silly-meringue-b45666.netlify.app/" target="_blank">
          Live Demo
        </a>
        <a className="btn github" href="https://github.com/Dheeraj-cre/university-management-system" target="_blank">
          GitHub
        </a>
      </div>
    </div>

    <div className="card">
      <h3>Car Rental Website</h3>
      <p>Search, filter & booking system built with React.</p>

      <div className="project-actions">
        <a className="btn" href="https://car-rentweb.netlify.app" target="_blank">
          Live Demo
        </a>
        <a className="btn github" href="https://github.com/Dheeraj-cre/car_rental_website" target="_blank">
          GitHub
        </a>
      </div>
    </div>

    <div className="card">
      <h3>Food Delivery Website</h3>
      <p>Restaurant listing and cart flow with responsive UI.</p>

      <div className="project-actions">
        <a className="btn" href="https://extraordinary-conkies-652a94.netlify.app/" target="_blank">
          Live Demo
        </a>
        <a className="btn github" href="https://github.com/Dheeraj-cre?tab=repositories" target="_blank">
          GitHub
        </a>
      </div>
    </div>

  </div>
</section>



      {/* Education */}
      <section className="section">
        <h2>Education</h2>
        <div className="card">
          <p><b>Master in Computer Application</b> – Lloyd Institute of Engineering & Technology,Greater Noida (2025)</p>
          <p><b>Bachelor of Computer Applications</b> – Microtek College, Varanasi (2023) </p>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <h2>Contact</h2>
        <p>Email: dheerajn2311@gmail.com</p>
        <p>Phone: +91 7985199359</p>
        <p>Languages: English, Hindi</p>
      </section>

    </div>
  );
}
