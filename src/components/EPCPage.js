import React from 'react';
import '../css/EPCPage.css';
import { FiSun, FiBattery, FiGrid, FiZap, FiCheckCircle } from 'react-icons/fi';
import ongrid from "../images/on-grid.webp";
import offgrid from "../images/off-grid.webp";
import hybrid from "../images/hybrid.png";
import video from "../images/client.mp4";

const EPCPage = () => {
  const systems = [
    {
      type: 'on-grid',
      title: 'Grid-Tied Solar Solutions',
      image: ongrid,
      features: [
        { icon: <FiGrid />, text: 'Utility grid integration' },
        { icon: <FiZap />, text: 'Net metering enabled' },
        { icon: <FiSun />, text: 'Maximum energy ROI' },
        { icon: <FiCheckCircle />, text: 'Low maintenance' }
      ],
      benefits: [
        'Reduce electricity bills by up to 90%',
        '25-year performance warranty',
        'Smart energy monitoring',
        'Government incentive eligible'
      ]
    },
    {
      type: 'off-grid',
      title: 'Independent Power Systems',
      image: offgrid,
      features: [
        { icon: <FiBattery />, text: 'Battery storage' },
        { icon: <FiSun />, text: 'Complete energy freedom' },
        { icon: <FiZap />, text: '24/7 power supply' },
        { icon: <FiCheckCircle />, text: 'Weather-resistant' }
      ],
      benefits: [
        'Ideal for remote locations',
        '3-5 days backup capacity',
        'Lithium-ion options available',
        'Scalable power solutions'
      ]
    },
    {
      type: 'hybrid',
      title: 'Smart Hybrid Systems',
      image: hybrid,
      features: [
        { icon: <FiGrid />, text: 'Grid + Battery backup' },
        { icon: <FiZap />, text: 'Intelligent energy routing' },
        { icon: <FiSun />, text: 'Uninterrupted supply' },
        { icon: <FiCheckCircle />, text: 'Peak load management' }
      ],
      benefits: [
        'Automatic grid switching',
        'Optimized energy storage',
        'Reduce generator use',
        'Energy usage analytics'
      ]
    }
  ];

  return (
    <main className="solar-systems">
      <header className="hero-banner">
        <div className="video-container">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Advanced Solar Energy Solutions</h1>
          <p className="hero-subtitle">Professional Engineering, Procurement & Construction Services</p>
        </div>
      </header>

      <section className="system-showcase">
        {systems.map((system, index) => (
          <article key={system.type} className={`power-system ${index % 2 === 0 ? '' : 'reversed'}`}>
            <div className="system-visual">
              <img src={system.image} alt={system.title} className="system-image" loading="lazy" />
              <div className="image-overlay"></div>
            </div>
            
            <div className="system-details">
              <div className="system-header">
                <h2>{system.title}</h2>
                <div className="accent-line"></div>
              </div>
              
              <div className="feature-container">
                {system.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.text}</h3>
                  </div>
                ))}
              </div>

              <div className="benefits-section">
                <h4 className="benefits-title">Key Benefits:</h4>
                <ul className="benefits-list">
                  {system.benefits.map((benefit, idx) => (
                    <li key={idx} className="benefit-item">
                      <FiCheckCircle className="benefit-icon" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

             
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default EPCPage;