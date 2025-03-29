import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css"; // Make sure to create this file for the styles

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Only show back button if not on home page
  const showBackButton = location.pathname !== "/";

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <nav className="navbar navbar-dark bg-primary fixed-top py-4">
        <div className="container-fluid">
          {/* Back arrow button with improved styling */}
          {showBackButton && (
            <button
              className="navbar-back-btn"
              onClick={handleBackToHome}
              aria-label="Back to home"
            >
              <i className="fas fa-arrow-left"></i>
              <span className="back-text">Home</span>
            </button>
          )}

          {/* Navbar brand/title */}
          <a
            className="navbar-brand mx-auto"
            style={{ display: "block", width: "fit-content", margin: "0 auto" }}
          >
            <span
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "1px",
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              Fleet Management
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
