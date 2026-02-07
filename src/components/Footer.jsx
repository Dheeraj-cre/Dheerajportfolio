import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          Designed & Built by Dheeraj Srivastava © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
