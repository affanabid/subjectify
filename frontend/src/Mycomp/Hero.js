import React from "react";
import "./styles/Hero.css";
import logo from "./Images/heroimg2.png";
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div className="HeroBody">
      {/* First Section - Hero */}
      <div className="hero">
        <div className="herotext">
          <h5>Empower Your Curiosity</h5>
          <h1>Personalized learning</h1>
          <p>
            Just tell us what you want to learn and get a curated stream of
            lectures, notes, and reading materials built around your domain of
            interest. No distractions. No fluff. Just focused knowledge.
          </p>
          <Link to="/DomainSearch">
            <button className="btn">Get Started</button>
          </Link>
        </div>

        <div className="heroimg">
          <img src={logo} alt="Logo" style={{}} />
        </div>
      </div>

      {/* Second Section - About */}
      <div id="about" className="hero">
        <div className="section-content">
          <h5>About Us</h5>
          <h1>Transforming Education</h1>
          <p className="section-description">
            At Subjectify, we're revolutionizing education through personalized learning experiences.
            Our platform connects learners with expert-curated content, making quality education
            accessible to everyone. We believe in empowering individuals to take control of their
            learning journey with our innovative approach to education.
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <h3>10K+</h3>
              <p>Active Learners</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Courses</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section - Members */}
      <div id="members" className="hero">
        <div className="section-content">
          <h5>Our Team</h5>
          <h1>Meet the Experts</h1>
          <p className="section-description">
            Our team consists of passionate educators and industry professionals
            committed to delivering exceptional learning experiences. Each member
            brings unique expertise to help you achieve your learning goals.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <h3>Miss Hamza Ahmed</h3>
              <p>Lead Educational Strategist</p>
              <p className="member-desc">15+ years in curriculum development</p>
            </div>
            <div className="team-member">
              <h3>Affan Abid</h3>
              <p>Sweeper</p>
              <p className="member-desc">Expert in Cleaning</p>
            </div>
            <div className="team-member">
              <h3>Musa Arfah</h3>
              <p>Learner</p>
              <p className="member-desc">Specialist in personalized learning and adaptive education systems</p>
            </div>
            <div className="team-member">
              <h3>Taimour Hassan</h3>
              <p>Technical Specialist</p>
              <p className="member-desc">Specialist in FrontEnd</p>
            </div>

          </div>
        </div>
      </div>

      {/* Fourth Section - Contact */}
      <div id="contact" className="hero">
        <div className="section-content">
          <h5>Get in Touch</h5>
          <h1>Contact Us</h1>
          <p className="section-description">
            Have questions? We're here to help! Reach out to our support team
            for assistance with your learning journey or to learn more about
            our platform.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>blah@subjectify.com</p>
              <p className="contact-desc">24/7 Support Available</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+92 (23) 12345671</p>
              <p className="contact-desc">Mon-Fri, 9AM-6PM</p>
            </div>
            <div className="contact-item">
              <h3>Office</h3>
              <p>123 N-Block</p>
              <p className="contact-desc">Lahore, 35200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

