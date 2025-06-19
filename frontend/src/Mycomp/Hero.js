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
          <p style={{textAlign: "center"}} className="section-description">
            At Subjectify, We combine the power of automation and intelligent design to gather and present 
            the most relevant learning materials from across the web—be it GitHub repositories, video 
            tutorials, roadmaps, or articles. With LearnMap, learners can focus on acquiring skills while 
            we handle the search and structure. 
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <h3>200+</h3>
              <p>Roadmaps Curated</p>
            </div>
            <div className="stat-item">
              <h3>300+</h3>
              <p>Topics Covered </p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Users Helped</p>
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
            {/* <div className="team-member">
              <h3>Hamza Ahmed</h3>
              <p>React Developer</p>
              <p className="member-desc">15+ years in curriculum development</p>
            </div>
            <div className="team-member">
              <h3>Affan Abid</h3>
              <p>Python Developer</p>
              <p className="member-desc">Python Developer</p>
            </div>
            <div className="team-member">
              <h3>Musa Arfah</h3>
              <p>Python Developer</p>
              <p className="member-desc">Python Developer</p>
            </div>
            <div className="team-member">
              <h3>Taimour Hassan</h3>
              <p>React Developer</p>
              <p className="member-desc">React Developer</p>
            </div> */}
            <div className="team-member"><a href="#" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "black"}}>
              <h3>Hamza Ahmed</h3>
              <p>React Developer</p>
              <p className="member-desc">Built core frontend components and handled UI state management.</p>
            </a></div>
            <div className="team-member"><a href="https://affanabid.github.io" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "black"}}>
              <h3>Affan Abid</h3>
              <p>Python Developer</p>
              <p className="member-desc">Designed and implemented the backend API and data scraping logic.</p>
              </a></div>
            <div className="team-member"><a href="#" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "black"}}>
              <h3>Musa Arfah</h3>
              <p>Python Developer</p>
              <p className="member-desc">Contributed to backend routing, data formatting, and integration testing.</p>
            </a></div>
            <div className="team-member"><a href="http://taimour-hssn1.github.io" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "black"}}>
              <h3>Taimour Hassan</h3>
              <p>React Developer</p>
              <p className="member-desc">Worked on responsive layout and API integration with the UI.</p>
              </a></div>


          </div>
        </div>
      </div>

      {/* Fourth Section - Contact */}
      {/* <div id="contact" className="hero">
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
              <p>contact@subjectify.com</p>
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
      </div> */}
    </div>
  );
};

export default Hero;

