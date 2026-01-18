import React, { useState, useEffect } from "react";
import "./style.css";

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.body.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.classList.toggle("light");
    localStorage.setItem("portfolio-theme", newTheme);
  };

  const skills = [
    { category: "Frontend", items: "HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS" },
    { category: "Backend", items: "Node.js, Express.js, RESTful APIs" },
    { category: "Database", items: "MySQL, MongoDB" },
    { category: "Tools & Platforms", items: "Git, GitHub, Postman, VS Code" },
    { category: "Others", items: "UI/UX Principles, Python, Deployment (Netlify / Render)" },
    { category: "Soft Skills", items: "Problem Solving, Teamwork, Clean Code, Communication" }
  ];

  const projects = [
    {
      title: "Movie Search App",
      description: "A responsive React.js application that fetches real-time movie data using APIs. Includes search functionality, ratings, and modern UI.",
      demo: "https://movierateing.vercel.app/",
      github: "https://github.com/Dheeraj-cre/Movie-search-app"
    },
    {
      title: "Everyday Chef – Recipe Finder App",
      description: "A React-based recipe finder application that allows users to search recipes using ingredients or dish names. Integrated with external recipe APIs and designed with a clean, responsive UI.",
      demo: "https://recipefinderapp-mu.vercel.app/",
      github: "https://github.com/Dheeraj-cre/recipe-finder-react"
    },
    {
      title: "CRUD Student Management App",
      description: "A full-stack CRUD application built with React.js on the frontend and backend API integration for managing student records with create, read, update, and delete operations.",
      demo: "https://curd-students.netlify.app/",
      github: "https://github.com/Dheeraj-cre/CRUD-Student-React"
    },
    {
      title: "University Management System",
      description: "Full-stack management system using MERN + MySQL with JWT-based authentication and role-based access.",
      demo: "https://silly-meringue-b45666.netlify.app/",
      github: "https://github.com/Dheeraj-cre/university-management-system"
    },
    {
      title: "Clinic Website CMS",
      description: "A complete MERN-based Content Management System for clinics that allows admins to manage doctors, services, appointments, gallery, and patient inquiries through a secure dashboard.",
      demo: "https://clinic-website-cms.vercel.app/",
      github: "https://github.com/Dheeraj-cre/clinic-website-cms"
    },
    {
      title: "Data Upload & Visualization Dashboard",
      description: "A smart React dashboard that allows users to upload datasets and visualize them using interactive charts and tables.",
      demo: "https://modern-smart-dashboard.netlify.app/",
      github: "https://github.com/Dheeraj-cre/data-upload-visualization-demo"
    },
    {
      title: "Car Rental Website",
      description: "React-based car rental platform with search, filters, and booking functionality.",
      demo: "https://car-rentweb.netlify.app",
      github: "https://github.com/Dheeraj-cre/car_rental_website"
    },
    {
      title: "MERN Authentication App",
      description: "A secure MERN stack authentication system featuring JWT-based login, email OTP verification, and password reset functionality with encrypted credentials.",
      demo: "https://mern-authentication-app-nine.vercel.app/login",
      github: "https://github.com/Dheeraj-cre/mern-authentication-app"
    },
    {
      title: "Food Delivery Website",
      description: "Responsive food ordering UI with restaurant listings, cart flow, and smooth user experience.",
      demo: "https://extraordinary-conkies-652a94.netlify.app/",
      github: "https://github.com/Dheeraj-cre?tab=repositories"
    }
  ];

  return (
    <div className="container">
      <button 
        className="toggle" 
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "☀️" : "🌙"} Theme
      </button>

      {/* Hero Section */}
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
          <a 
            href="https://github.com/Dheeraj-cre" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/dheerajsri" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
          >
            LinkedIn
          </a>
        </div>

        <a 
          href="/Dheeraj_Resume.pdf" 
          className="btn" 
          download
          aria-label="Download resume"
        >
          Download Resume
        </a>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-row">
              <strong>{skill.category}:</strong> {skill.items}
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
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

      {/* Experience Section */}
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

      {/* Projects Section */}
      <section className="section">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-actions">
                <a 
                  className="btn" 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (project.demo === "#") {
                      e.preventDefault();
                    }
                  }}
                  aria-label={`View ${project.title} live demo`}
                >
                  Live Demo
                </a>
                <a 
                  className="btn github" 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (project.github === "#") {
                      e.preventDefault();
                    }
                  }}
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:dheerajn2311@gmail.com">dheerajn2311@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+917985199359">+91 7985199359</a>
        </p>
        <p>Languages: English, Hindi</p>
      </section>
    </div>
  );
}