

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Home = () => {
  const navigate = useNavigate();

  const handleScheduleDemo = () => {
    navigate("/search");
  };

  return (
    <div className="home-container">
      <Navbar />

      {/* Bootstrap Carousel */}
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-background bg-image-1">
              <div className="carousel-overlay"></div>
            </div>
            <div className="carousel-caption">
              <h2>Advanced Fleet Tracking</h2>
              <p>Real-time tracking with detailed analytics</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-background bg-image-2">
              <div className="carousel-overlay"></div>
            </div>
            <div className="carousel-caption">
              <h2>Maintenance Management</h2>
              <p>Scheduled maintenance alerts and service history</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-background bg-image-3">
              <div className="carousel-overlay"></div>
            </div>
            <div className="carousel-caption">
              <h2>Fuel Efficiency Monitoring</h2>
              <p>Optimize routes and reduce fuel consumption</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="content-container">
        <div className="content-wrapper">
          <h1 className="main-title">Automate Your Fleet Vehicles</h1>
          <p className="description">
            Track, Manage and Analyze transport vehicles smoothly
          </p>
          <button className="demo-button" onClick={handleScheduleDemo}>
            SCHEDULE DEMO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
