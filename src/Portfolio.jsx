import React, { useState, useEffect } from "react";
import "./style.css";
import profileImg from "./assets/profile.jpg";


// Import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };


  // Skills

  const skills = [
  { 
    category: "Frontend", 
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS"]
  },
  { 
    category: "Backend", 
    items: ["Node.js", "Express.js", "RESTful APIs"]
  },
  { 
    category: "Database", 
    items: ["MySQL", "MongoDB"]
  },
  { 
    category: "Tools & Platforms", 
    items: ["Git", "GitHub", "Postman", "VS Code"]
  },
  { 
    category: "Others", 
    items: ["UI/UX Principles", "Python", "Deployment (Netlify / Render)"]
  },
  { 
    category: "Soft Skills", 
    items: ["Problem Solving", "Teamwork", "Communication"]
  }
];


  const projects = [
    {
      title: "Movie Search App",
      description: "A responsive React.js application that fetches real-time movie data using APIs. Includes search functionality, ratings, and modern UI.",
      demo: "https://movierateing.vercel.app/",
      github: "https://github.com/Dheeraj-cre/Movie-search-app",
      tags: ["React", "API", "Responsive"]
    },
    {
      title: "Everyday Chef – Recipe Finder App",
      description: "A React-based recipe finder application that allows users to search recipes using ingredients or dish names. Integrated with external recipe APIs and designed with a clean, responsive UI.",
      demo: "https://recipefinderapp-mu.vercel.app/",
      github: "https://github.com/Dheeraj-cre/recipe-finder-react",
      tags: ["React", "REST API", "UI/UX"]
    },
    {
      title: "CRUD Student Management App",
      description: "A full-stack CRUD application built with React.js on the frontend and backend API integration for managing student records with create, read, update, and delete operations.",
      demo: "https://curd-students.netlify.app/",
      github: "https://github.com/Dheeraj-cre/CRUD-Student-React",
      tags: ["React", "CRUD", "Full Stack"]
    },
    {
      title: "University Management System",
      description: "Full-stack management system using MERN + MySQL with JWT-based authentication and role-based access.",
      demo: "https://silly-meringue-b45666.netlify.app/",
      github: "https://github.com/Dheeraj-cre/university-management-system",
      tags: ["MERN", "MySQL", "JWT"]
    },
    {
      title: "Clinic Website CMS",
      description: "A complete MERN-based Content Management System for clinics that allows admins to manage doctors, services, appointments, gallery, and patient inquiries through a secure dashboard.",
      demo: "https://clinic-website-cms.vercel.app/",
      github: "https://github.com/Dheeraj-cre/clinic-website-cms",
      tags: ["MERN", "CMS", "Dashboard"]
    },
    {
      title: "Data Upload & Visualization Dashboard",
      description: "A smart React dashboard that allows users to upload datasets and visualize them using interactive charts and tables.",
      demo: "https://modern-smart-dashboard.netlify.app/",
      github: "https://github.com/Dheeraj-cre/data-upload-visualization-demo",
      tags: ["React", "Charts", "Data Viz"]
    },
    {
      title: "Car Rental Website",
      description: "React-based car rental platform with search, filters, and booking functionality.",
      demo: "https://car-rentweb.netlify.app",
      github: "https://github.com/Dheeraj-cre/car_rental_website",
      tags: ["React", "UI/UX", "Booking"]
    },
    {
      title: "MERN Authentication App",
      description: "A secure MERN stack authentication system featuring JWT-based login, email OTP verification, and password reset functionality with encrypted credentials.",
      demo: "https://mern-authentication-app-nine.vercel.app/login",
      github: "https://github.com/Dheeraj-cre/mern-authentication-app",
      tags: ["MERN", "JWT", "Auth"]
    },
    {
      title: "Food Delivery Website",
      description: "Responsive food ordering UI with restaurant listings, cart flow, and smooth user experience.",
      demo: "https://extraordinary-conkies-652a94.netlify.app/",
      github: "https://github.com/Dheeraj-cre?tab=repositories",
      tags: ["React", "UI/UX", "E-commerce"]
    }
  ];

  const experience = [
  {
    role: "Frontend Developer Intern",
    company: "V.EDU Pvt. Ltd.",
    period: "Feb 2025 - Jul 2025",
    description:
      "Worked on building and optimizing responsive web interfaces using React.js, HTML, CSS, and JavaScript, focusing on performance and usability.",
    achievements: [
      "Developed 20+ reusable and responsive UI components",
      "Improved website performance and load time by ~15%",
      "Fixed UI/UX issues to enhance user experience across devices",
      "Collaborated with designers and backend developers in an agile environment"
    ]
  },
  {
    role: "Frontend / Full Stack Web Developer",
    company: "Freelance / Personal Projects",
    period: "2023 - Present",
    description:
      "Designed and developed multiple real-world web applications using modern frontend and full-stack technologies.",
    achievements: [
      "Built and deployed 8+ real-world projects using React.js and MERN stack",
      "Implemented REST APIs, authentication, and dashboard features",
      "Focused on clean code, responsiveness, and modern UI practices",
      "Deployed applications on Netlify, Vercel, and Render"
    ]
  }
];


  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="portfolio">
      <Navbar
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        toggleMobileMenu={toggleMobileMenu}
        handleNavClick={handleNavClick}
        navItems={navItems}
      />

      <Hero profileImg={profileImg} />

      <Skills skills={skills} />

      <Projects projects={projects} />

      <Experience experience={experience} />

      <Contact />

      <Footer />
    </div>
  );
}
