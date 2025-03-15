import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaSolarPanel } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__sunburst"></div>
      
      <div className="footer__main">
        <div className="footer__logo-box">
          <div className="footer__logo">
            <FaSolarPanel className="footer__logo-icon" />
            <div className="footer__logo-text">
              <span className="footer__logo-primary">VASUNDHARA</span>
              <span className="footer__logo-sub">Solar Solutions</span>
            </div>
          </div>
          <p className="footer__tagline">Harnessing the Power of the Sun for a Sustainable Tomorrow</p>
        </div>

        <div className="footer__grid">
          <div className="footer__column">
            <h3 className="footer__heading">Contact Energy</h3>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <FaMapMarkerAlt className="footer__contact-icon" />
                <span>Solar Park Complex, Green Energy City, GE 12345</span>
              </li>
              <li className="footer__contact-item">
                <FaPhone className="footer__contact-icon" />
                <span>+91 98765 43210</span>
              </li>
              <li className="footer__contact-item">
                <FaEnvelope className="footer__contact-icon" />
                <span>contact@vasundharasolar.com</span>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Solar Links</h3>
            <nav className="footer__nav">
              <Link to="/about" className="footer__nav-link">Our Mission</Link>
              <Link to="/service" className="footer__nav-link">Installations</Link>
              <Link to="/contact" className="footer__nav-link">Consultation</Link>
              <Link to="/blog" className="footer__nav-link">Solar Insights</Link>
            </nav>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Follow the Sun</h3>
            <div className="footer__socials">
              {[
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <FaTwitter />, label: "Twitter" },
                { icon: <FaLinkedinIn />, label: "LinkedIn" },
                { icon: <FaInstagram />, label: "Instagram" }
              ].map((social, index) => (
                <a key={index} href="#" className="footer__social-link" aria-label={social.label}>
                  <span className="social-icon-wrapper">
                    {social.icon}
                    <span className="solar-ray"></span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="footer__badges">
        <div className="certification-badge">Certified Installer</div>
        <div className="certification-badge">Green Energy Partner</div>
      </div> */}

      <div className="footer__copyright">
        <p>
          © {new Date().getFullYear()} VASUNDHARA SOLAR • 
          <span> Powering Sustainable Futures</span>
        </p>
        <div className="footer__leaf-pattern"></div>
      </div>
    </footer>
  );
};

export default Footer;