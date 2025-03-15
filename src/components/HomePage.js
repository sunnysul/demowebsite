import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Home.css";
import aboutImage from "../images/image2.jpeg";
import heroVideo from "../images/solar-hero.mp4";
import residentialImg from "../images/residential.jpeg";
import commercialImg from "../images/commercial.jpg";
import industrialImg from "../images/industrial.jpeg";
import smeImg from "../images/sme.jpeg";
import { 
  FaSolarPanel, FaChevronDown, FaClipboard, FaEnvelope, 
  FaUser, FaInstagram, FaLinkedin, FaTwitter, FaFacebook, 
  FaPhone, FaMapMarkerAlt, FaComment, FaPaperPlane ,FaCheckCircle
} from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    "Certified solar technicians",
    "Premium quality components",
    "24/7 system monitoring",
    "Free energy consultation",
    "5-year workmanship warranty"
  ];

  const benefits = [
    { icon: "🌞", title: "Expert Installation", description: "Certified solar technicians with decade-long experience" },
    { icon: "📈", title: "Maximum Efficiency", description: "25% higher energy yield than industry average" },
    { icon: "💸", title: "Cost Savings", description: "Reduce energy bills by up to 70%" },
    { icon: "🛡️", title: "Warranty", description: "25-year performance guarantee" },
    { icon: "🌍", title: "Eco-Friendly", description: "Zero carbon footprint solutions" },
    { icon: "⏱️", title: "Quick Turnaround", description: "Installation in 3-5 business days" }
  ];

  const services = [
    {
      title: "Residential Solar",
      description: "Tailored solar systems for homes",
      image: residentialImg,
      path: "/residential"
    },
    {
      title: "Commercial Solar",
      description: "Solar solutions for businesses",
      image: commercialImg,
      path: "/commercial"
    },
    {
      title: "Industrial Solar",
      description: "High-capacity industrial systems",
      image: industrialImg,
      path: "/industrial"
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    contactNumber: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await axios.post("http://localhost:5000/send-email", formData);
      setStatus("Email sent successfully!");
      setFormData({ name: "", email: "", subject: "", contactNumber: "", message: "" });
    } catch (error) {
      setStatus("Error sending email. Try again.");
    }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>Empowering Tomorrow with Solar Energy</h1>
          <p>Experience Clean Energy Solutions for Home & Business</p>
          <button className="cta-button" onClick={() => navigate('/contact')}>
            Get Free Consultation
          </button>
        </div>
        <div className="scroll-indicator">
          <FaChevronDown className="bounce" />
        </div>
      </section>

      {/* About Section */}
<section className="about-section">
  <div className="about-container">
    <div className="about-image">
      <img src={aboutImage} alt="Solar Installation Team" />
    </div>
    <div className="about-content">
      <h2>Empowering the Future with Solar Energy</h2>
      <p className="sub-headline">
        Sustainable, Reliable, and Cost-Effective Solar Solutions for Every Need
      </p>
      <p className="introduction-text">
        At Vasundhara Solar Services (VSS), we are committed to delivering cutting-edge solar energy 
        solutions that cater to residential, commercial, industrial, and SME requirements. Our 
        comprehensive services are designed to meet your energy needs while ensuring maximum savings, 
        optimal performance, and long-term sustainability.
      </p>
      <div className="stats-grid">
        <div className="stat-item">
          <h3>2.5MW+</h3>
          <p>Installed Capacity</p>
        </div>
        <div className="stat-item">
          <h3>1500+</h3>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  </div>
</section>

 {/* Services Section */}
<section className="services-section">
  <div className="container">
    <div className="section-header">
      <h2>Powering Your World with Solar</h2>
      <p className="section-subtitle">Custom solutions for every energy need</p>
      <div className="title-divider"></div>
    </div>
    <div className="services-grid">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="card-inner">
            <div className="card-front" style={{ backgroundImage: `url(${service.image})` }}>
              <div className="image-overlay"></div>
              <div className="card-content">
                <FaSolarPanel className="service-icon" />
                <h3>{service.title}</h3>
                <div className="hover-indicator">
                  <FaChevronDown className="bounce" />
                </div>
              </div>
            </div>
            <div className="card-back">
              <div className="back-content">
                <p>{service.description}</p>
                <ul className="service-benefits">
                  <li><FaCheckCircle /> 25-year warranty</li>
                  <li><FaCheckCircle /> Smart monitoring</li>
                  <li><FaCheckCircle /> Tax incentives</li>
                </ul>
                <button 
                  className="service-cta"
                  onClick={() => navigate(service.path)}
                >
                  Explore Options
                  <FaChevronDown className="cta-arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

          {/* Contact Section */}
          <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Start Your Solar Journey</h2>
              <div className="info-group">
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <h4>Visit Us</h4>
                    <p>123 Solar Street<br/>Energy City, EC 45678</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <div>
                    <h4>Call Us</h4>
                    <p>+1 (234) 567-8900<br/>Mon-Fri: 8AM - 6PM</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <h4>Email Us</h4>
                    <p>info@solarexample.com<br/>support@solarexample.com</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <FaFacebook className="social-icon" />
                <FaTwitter className="social-icon" />
                <FaLinkedin className="social-icon" />
                <FaInstagram className="social-icon" />
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Quick Inquiry</h3>
              <div className="form-row">
                <div className="input-group">
                  <FaUser className="input-icon" />
                  <input type="text" name="name" placeholder="Full Name" required />
                </div>
                <div className="input-group">
                  <FaEnvelope className="input-icon" />
                  <input type="email" name="email" placeholder="Email Address" required />
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <FaPhone className="input-icon" />
                  <input type="tel" name="contactNumber" placeholder="Phone Number" required />
                </div>
                <div className="input-group">
                  <FaClipboard className="input-icon" />
                  <input type="text" name="subject" placeholder="Subject" required />
                </div>
              </div>
              <div className="input-group">
                <FaComment className="input-icon" />
                <textarea name="message" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <FaPaperPlane className="send-icon" />
              </button>
              {status && <p className="status-message">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;