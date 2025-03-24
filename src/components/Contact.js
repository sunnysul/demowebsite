import React, { useState } from "react";
import axios from "axios";
import "../css/Contact.css";
import contactVideo from "../images/contact.mp4";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram, FaSolarPanel,FaWhatsapp } from "react-icons/fa";

const Contact = () => {
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
      const response = await axios.post("http://localhost:5000/send-email", formData);
      setStatus(response.data.success || "Email sent successfully!");
      setFormData({ name: "", email: "", subject: "", contactNumber: "", message: "" });
    } catch (error) {
      setStatus("Error sending email. Try again.");
    }
  };

  return (
    <div className="contact-page">
      {/* Video Banner */}
      <section className="contact-banner">
        <div className="video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="https://images.unsplash.com/photo-1601342630314-8427c38bf5e6"
          >
            <source src={contactVideo} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="banner-content">
          <h1>Connect with Solar Experts</h1>
          <p>Illuminate your energy future - Let's discuss your solar needs</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards">
        <div className="container">
          <div className="cards-grid">
            <div className="contact-card">
              <div className="card-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Our Headquarters</h3>
              <p>A/P: Bidal, Tal-Man,<br />
              Dist-Satara, 415508<br />
              Maharashtra, India</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <FaPhone />
              </div>
              <h3>Contact Number</h3>
              <p>+91 7757050168</p>
              <p>+91 9209768544</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <FaEnvelope />
              </div>
              <h3>Email Address</h3>
              <p>evasundharasolar@gmail.com</p>
            </div>

            <div className="contact-card social-card">
              <h3>Follow Our Energy</h3>
              <div className="social-links">
                <a href="https://www.instagram.com/vasundharasolar?igsh=MTgycmltbmppcjRmNA=="><FaFacebook /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="https://www.instagram.com/vasundharasolar?igsh=MTgycmltbmppcjRmNA=="><FaInstagram /></a>
                <a  href ="https://wa.me/917757050168?text=Hello%20I'm%20interested%20in%20your%20solar%20solutions.%20Please%20provide%20more%20information">
                 <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Contact Form Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <FaSolarPanel className="form-icon" />
                <h2>Solar Inquiry Form</h2>
                <p>Get a personalized solar solution for your home</p>
              </div>
              
              <form onSubmit={handleSubmit} className="solar-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="tel" 
                    name="contactNumber" 
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Your Solar Requirements"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="solar-submit-btn">
                  Send Message <FaSolarPanel className="btn-icon" />
                </button>

                {status && <div className="form-status">{status}</div>}
              </form>
            </div>

            {/* Map Section */}
            {/* Map Section */}
<div className="map-section">
  <div className="map-container">
    <iframe
      title="Solar Office Location"
      src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d408.01343000055226!2d74.52597183341226!3d17.752234396814178!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1742835995559!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{ border: 0 }}
      aria-label="Company location map"
    ></iframe>
    {/* <iframe src="" 
    width="600"
     height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
  </div>
  <div className="map-overlay">
    <h3>Our Solar Office</h3>
    <p>Visit us for a personalized consultation</p>
    <div className="office-hours">
      <p>Mon-Fri: 8AM - 6PM</p>
      <p>Saturday: 9AM - 4PM</p>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;