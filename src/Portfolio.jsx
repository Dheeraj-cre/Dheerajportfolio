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

        <p>
          MCA Graduate | Frontend Developer | Creative Problem Solver <br />
          I love building user-centric web applications with React.js,
          JavaScript, and clean UI. Passionate about developing responsive,
          scalable, and high-performance web apps.
        </p>

        <div className="links">
          <a href="https://github.com/Dheeraj-cre" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/dheerajsri" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <a href="/Dheeraj_Resume.pdf" className="btn" download>
          Download Resume
        </a>
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
            <strong>Soft Skills:</strong> Problem Solving, Teamwork, Clean Code, Communication
          </div>
        </div>
      </section>
            {/* Education */}
      <section className="section">
        <h2>Education</h2>
        <div className="card">
          <p>
            <b>Master of Computer Applications (MCA)</b> – Lloyd Institute of
            Engineering & Technology, Greater Noida (2025)
          </p>
          <p>
            <b>Bachelor of Computer Applications (BCA)</b> – Microtek College,
            Varanasi (2023)
          </p>
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
            <li>Improved website load time by 15%</li>
            <li>Resolved UI/UX issues to enhance user experience</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
     {/* Projects */}
<section className="section">
  <h2>Projects</h2>
  <div className="grid">

    {/* ===== FEATURED PROJECTS ===== */}
    <div className="card">
      <h3>Movie Search App</h3>
      <p>
        A responsive React.js application that fetches real-time movie data
        using APIs. Includes search functionality, ratings, and modern UI.
      </p>
      <div className="project-actions">
        <a className="btn" href="https://movierateing.vercel.app/" target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a className="btn github" href="https://github.com/Dheeraj-cre/Movie-search-app" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>

    <div className="card">
      <h3>Data Upload & Visualization Dashboard</h3>
      <p>
        A smart React dashboard that allows users to upload datasets and
        visualize them using interactive charts and tables.
      </p>
      <div className="project-actions">
        <a className="btn" href="https://modern-smart-dashboard.netlify.app/" target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a className="btn github" href="https://github.com/Dheeraj-cre/data-upload-visualization-demo" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>

    <div className="card">
      <h3>CRUD Student Management App</h3>
      <p>
           A full-stack CRUD application built with React.js on the frontend and
           backend API integration for managing student records with create, read,
           update, and delete operations.
      </p>
      <div className="project-actions">
        <a className="btn" href="https://curd-students.netlify.app/" target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a className="btn github" href="https://github.com/Dheeraj-cre/CRUD-Student-React" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>

    {/* ===== OTHER PROJECTS ===== */}
    <div className="card">
      <h3>University Management System</h3>
      <p>
        Full-stack management system using MERN + MySQL with JWT-based
        authentication and role-based access.
      </p>
      <div className="project-actions">
        <a className="btn" href="https://silly-meringue-b45666.netlify.app/" target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a className="btn github" href="https://github.com/Dheeraj-cre/university-management-system" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>

    <div className="card">
      <h3>Car Rental Website</h3>
      <p>
        React-based car rental platform with search, filters, and booking
        functionality.
      </p>
      <div className="project-actions">
        <a className="btn" href="https://car-rentweb.netlify.app" target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a className="btn github" href="https://github.com/Dheeraj-cre/car_rental_website" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>

    <div className="card">
      <h3>Food Delivery Website</h3>
      <p>
        Responsive food ordering UI with restaurant listings, cart flow,
        and smooth user experience.
      </p>
      <div className="project-actions">
        <a className="btn" href="https://extraordinary-conkies-652a94.netlify.app/" target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a className="btn github" href="https://github.com/Dheeraj-cre?tab=repositories" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>

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
