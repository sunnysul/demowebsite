import React from 'react';
import { FaLeaf, FaLightbulb, FaUsers, FaChartLine, FaSun, FaSolarPanel } from 'react-icons/fa';
import '../css/About.css';
import solarfarm from "../images/solar-farm.jpeg";
import video from "../images/video.mp4"

const AboutUs = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="video-container">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        poster="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-solar-panel-array-39758.png"
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="hero-content">
                    <h1>Empowering Tomorrow with Solar Innovation</h1>
                    <p>Harnessing sunlight to fuel sustainable progress worldwide</p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="company-overview">
                <div className="content-wrapper">
                    <div className="text-content">
                        <div className="section-tag">
                            <FaSolarPanel className="tag-icon"/>
                            <span>About Us</span>
                        </div>
                        <h2>Solar Energy Pioneers Since 2015</h2>
                        <p>
                            Vasundhara Solar Services leads the renewable revolution with cutting-edge photovoltaic solutions. 
                            Our expertise spans industrial, commercial and residential installations to utility-scale solar projects, 
                            delivering clean energy solutions.
                        </p>
                        <div className="achievements">
                            <div className="achievement-item">
                                <div className="achievement-number">10+</div>
                                <div className="achievement-text">Years Experience</div>
                            </div>
                            <div className="achievement-item">
                                <div className="achievement-number">700+</div>
                                <div className="achievement-text">Projects Completed</div>
                            </div>
                        </div>
                    </div>
                    <div className="visual-element">
                        <img src={solarfarm} alt="Solar farm" className="featured-image"/>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="core-values">
                <div className="section-header">
                    <div className="section-tag">
                        <FaSun className="tag-icon"/>
                        <span>Our Principles</span>
                    </div>
                    <h2>Foundations of Solar Excellence</h2>
                </div>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon-container">
                            <FaLeaf className="value-icon"/>
                        </div>
                        <h4>Sustainability</h4>
                        <p>Reducing environmental impact through renewable energy solutions</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon-container">
                            <FaLightbulb className="value-icon"/>
                        </div>
                        <h4>Innovation</h4>
                        <p>Continuous improvement with cutting-edge technologies</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon-container">
                            <FaUsers className="value-icon"/>
                        </div>
                        <h4>Customer Focus</h4>
                        <p>Tailored solutions meeting specific client requirements</p>
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="commitment">
                <div className="commitment-container">
                    <div className="section-header">
                        <div className="section-tag">
                            <FaLeaf className="tag-icon"/>
                            <span>Our Promise</span>
                        </div>
                        <h2>Solar Commitment to Excellence</h2>
                        <p className="section-subtitle">Driving the photovoltaic revolution through measurable impact</p>
                    </div>
                    <div className="solar-stats">
                        <div className="stat-item">
                            <FaSun className="stat-icon"/>
                            <div className="stat-content">
                                <div className="stat-value">200K+</div>
                                <div className="stat-label">Panels Installed</div>
                            </div>
                        </div>
                        <div className="stat-item">
                            <FaChartLine className="stat-icon"/>
                            <div className="stat-content">
                                <div className="stat-value">70%</div>
                                <div className="stat-label">Cost Reduction</div>
                            </div>
                        </div>
                        <div className="stat-item">
                            <FaLeaf className="stat-icon"/>
                            <div className="stat-content">
                                <div className="stat-value">2.5M+</div>
                                <div className="stat-label">Tons CO2 Offset</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;