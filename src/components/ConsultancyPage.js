import React from 'react';
import '../css/ConsultancyPage.css';
import { FiCheck, FiUsers, FiBriefcase, FiClipboard, FiDollarSign, FiGlobe } from 'react-icons/fi';
import consultancyHero from '../images/consultancy1.jpg';
import teamPhoto from '../images/consultancy2.webp';
import project1 from '../images/consultancy3.jpg';
import project2 from '../images/consultancy4.jpeg';

const ConsultancyPage = () => {
  const services = [
    {
      icon: <FiClipboard />,
      title: "Feasibility Studies",
      description: "Detailed analysis of solar potential, financial viability, and technical requirements"
    },
    {
      icon: <FiDollarSign />,
      title: "Financial Modeling",
      description: "ROI analysis, payback period calculations, and funding assistance"
    },
    {
        icon: <FiBriefcase />,
        title: "Project Management",
        description: "End-to-end supervision from design to commissioning"
      },
    {
      icon: <FiGlobe />,
      title: "Sustainability Planning",
      description: "Carbon footprint analysis and renewable integration strategies"
    },
  ];

  const processSteps = [
    { title: "Initial Consultation", duration: "1-2 Days" },
    { title: "Site Assessment", duration: "3-5 Days" },
    { title: "System Design", duration: "1-2 Weeks" },
    { title: "Financial Planning", duration: "3-5 Days" },
    { title: "Implementation", duration: "2-4 Weeks" }
  ];

  const projects = [
    {
      image: project1,
      title: "10MW Solar Farm",
      location: "Rajasthan",
      capacity: "Powers 8,000 homes"
    },
    {
      image: project2,
      title: "Commercial Rooftop",
      location: "Mumbai",
      capacity: "1.2MW System"
    }
  ];

  const teamMembers = [
    { name: "Aarav Sharma", role: "Lead Engineer", experience: "12+ years" },
    { name: "Neha Gupta", role: "Financial Analyst", experience: "8+ years" },
    { name: "Rohan Patel", role: "Project Manager", experience: "10+ years" }
  ];

  const faqs = [
    {
      question: "How long does the consultancy process take?",
      answer: "Typically 4-8 weeks depending on project complexity"
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer maintenance contracts and performance monitoring"
    }
  ];

  return (
    <div className="consultancy-page">
      {/* Hero Section */}
      <section className="consultancy-hero">
        <div className="hero-image-container">
          <img src={consultancyHero} alt="Solar Consultancy" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Solar Energy Consultancy Services</h1>
          <p className="hero-subtitle">Expert Guidance for Sustainable Energy Solutions</p>
          <button className="cta-button">Schedule Free Consultation</button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose section-padding">
        <div className="section-header">
          <h2>Why Choose Vasundhara?</h2>
          <div className="accent-line"></div>
        </div>
        
        <div className="advantages-grid">
          <div className="advantage-card">
            <FiUsers className="advantage-icon" />
            <h3>700+ Projects Completed</h3>
            <p>Successful implementations across India</p>
          </div>
          <div className="advantage-card">
            <FiCheck className="advantage-icon" />
            <h3>ISO Certified</h3>
            <p>Quality assured services</p>
          </div>
          <div className="advantage-card">
            <FiBriefcase className="advantage-icon" />
            <h3>360° Solutions</h3>
            <p>From planning to maintenance</p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="our-process section-padding">
        <div className="section-header">
          <h2>Our Consultancy Process</h2>
          <div className="accent-line"></div>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="services-section section-padding">
        <div className="section-header">
          <h2>Our Consultancy Services</h2>
          <div className="accent-line"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      {/* <section className="case-studies section-padding">
        <div className="section-header">
          <h2>Recent Projects</h2>
          <div className="accent-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.location}</p>
                <p>{project.capacity}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="team-section section-padding">
        <div className="section-header">
          <h2>Our Expert Team</h2>
          <div className="accent-line"></div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={teamPhoto} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p className="experience">{member.experience} Experience</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className="faq-section section-padding">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <div className="accent-line"></div>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="toggle-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Contact CTA */}
      {/* <section className="contact-cta section-padding">
        <div className="cta-content">
          <h2>Start Your Solar Journey Today</h2>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="cta-button">Get Free Proposal</button>
          </form>
        </div>
      </section> */}
    </div>
  );
};

export default ConsultancyPage;