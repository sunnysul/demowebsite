import React from 'react';
import { FaHome, FaSolarPanel, FaChartLine, FaLeaf, FaTachometerAlt, FaHandHoldingUsd } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../css/ResidentialSolar.css';

const ResidentialSolar = () => {
  return (
    <div className="residential-solar-page">
      {/* Hero Section */}
      <section className="residential-hero">
        <div className="hero-content">
          <h1>Residential Solar Solutions</h1>
          <p>Power Your Home with Clean, Renewable Energy</p>
          <Link to="/contact" className="cta-button">Get Free Home Assessment</Link>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-image"></div>
      </section>

      {/* Key Features */}
      <section className="key-features">
        <div className="section-container">
          <h2>Why Choose Home Solar?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FaHome className="feature-icon" />
              <h3>Custom Home Solutions</h3>
              <p>Tailored systems designed for your specific energy needs and roof structure</p>
            </div>
            <div className="feature-card">
              <FaChartLine className="feature-icon" />
              <h3>30% Energy Savings</h3>
              <p>Average reduction in electricity bills for our residential customers</p>
            </div>
            <div className="feature-card">
              <FaLeaf className="feature-icon" />
              <h3>Carbon Neutral Living</h3>
              <p>Reduce your household's carbon footprint by up to 3 tons annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Comparison */}
      <section className="savings-comparison">
        <div className="comparison-container">
          <div className="comparison-card without-solar">
            <h3>Without Solar</h3>
            <div className="price">$150/month</div>
            <ul>
              <li>Grid dependency</li>
              <li>Rate hikes</li>
              <li>Carbon emissions</li>
            </ul>
          </div>
          <div className="vs-circle">VS</div>
          <div className="comparison-card with-solar">
            <h3>With Solar</h3>
            <div className="price">$25/month</div>
            <ul>
              <li>Energy independence</li>
              <li>Fixed rates</li>
              <li>Clean energy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="installation-process">
        <div className="section-container">
          <h2>Simple 4-Step Installation</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <FaTachometerAlt className="step-icon" />
              <h3>Energy Assessment</h3>
              <p>Detailed analysis of your home's energy consumption</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <FaSolarPanel className="step-icon" />
              <h3>Custom Design</h3>
              <p>3D modeling for optimal panel placement</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <FaHandHoldingUsd className="step-icon" />
              <h3>Approvals & Financing</h3>
              <p>Handle all permits and financing options</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <FaLeaf className="step-icon" />
              <h3>Install & Activate</h3>
              <p>Professional installation and system activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="residential-cta">
        <div className="cta-content">
          <h2>Start Your Solar Journey Today</h2>
          <p>Get a personalized quote and join the renewable energy revolution</p>
          <Link to="/contact" className="cta-button">Request Free Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default ResidentialSolar;