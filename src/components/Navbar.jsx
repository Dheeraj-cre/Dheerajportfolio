import React from "react";

export default function Navbar({ 
  isScrolled, 
  isMobileMenuOpen, 
  activeSection, 
  theme,
  toggleTheme,
  toggleMobileMenu,
  handleNavClick,
  navItems 
}) {
  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavClick("home")}>
          DS
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? (
              <span className="theme-icon">☀️</span>
            ) : (
              <span className="theme-icon">🌙</span>
            )}
          </button>

          <button 
            className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
