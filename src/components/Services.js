import React from "react";
import "../css/Services.css";
import {
  FaSolarPanel,
  FaTools,
  FaHandshake,
  FaFileContract,
  FaHome,
  FaBuilding,
  FaIndustry,
  FaUsers,
  FaTint,
  FaLightbulb,
  FaBatteryFull,
  FaPlug,
  FaNetworkWired,
  FaCheckCircle
} from "react-icons/fa";
import serviceVideo from "../images/service.mp4";
import CONFIG_IMAGE from "../images/roof.webp"
import NET_METERING_IMAGE from "../images/meter.avif";
import MAINTENANCE_IMAGE from "../images/maintainenece.webp"

const services = [
  {
    title: "Engineering, Procurement & Construction (EPC)",
    description: "VSS provides end-to-end solar solutions from design to commissioning, ensuring seamless project execution.",
    icon: <FaSolarPanel className="service-icon" />,
   
  },
  {
    title: "Build-Operate-Transfer (BOT)",
    description: "Under a BOT contract, we finance, build, and operate solar facilities before transferring ownership.",
    icon: <FaHandshake className="service-icon" />,
  
  },
  {
    title: "Power Purchase Agreement (PPA)",
    description: "A financial agreement where we install and maintain solar systems at no upfront cost to the client.",
    icon: <FaFileContract className="service-icon" />,
    color: "#e67e22"
  },
  {
    title: "Operations and Maintenance (O&M)",
    description: "VSS ensures peak efficiency with comprehensive monitoring and maintenance services.",
    icon: <FaTools className="service-icon" />,
    color: "#8e44ad"
  }
];

const keyServices = [
  {
    title: "Residential Solar Solutions",
    description: "Customized Installations: Tailored solar systems for homes helping you achieve energy independence and reduce electricity bills.",
    icon: <FaHome className="key-service-icon" />,
    features: [
      "Energy consumption analysis",
      "Roof-mounted/Ground-mounted options",
      "Smart energy monitoring",
      "25-year performance warranty"
    ]
  },
  {
    title: "Commercial Solar Solutions",
    description: "Scalable Systems: Solar solutions reducing operational costs and enhancing business sustainability.",
    icon: <FaBuilding className="key-service-icon" />,
    features: [
      "Custom financial models",
      "Peak load management",
      "Green certification support",
      "24/7 system monitoring"
    ]
  },
  {
    title: "Industrial Solar Systems",
    description: "High-Efficiency Systems: Seamless integration with existing power setups for year-round operations.",
    icon: <FaIndustry className="key-service-icon" />,
    features: [
      "High-capacity inverters",
      "Industrial-grade components",
      "Dust-resistant panels",
      "Preventive maintenance"
    ]
  },
];
const additionalServices = [
  {
    title: "Solar Water Heating",
    icon: <FaTint />,
    description: "Energy-efficient water heating solutions using solar power"
  },
  {
    title: "Solar Lighting Systems",
    icon: <FaLightbulb />,
    description: "Solar-powered outdoor and street lighting solutions"
  },
  {
    title: "Maintenance & Support",
    icon: <FaTools />,
    description: "Regular check-ups and technical support"
  }
];
const configurationSystems = [
  {
    title: "Off-Grid Systems",
    icon: <FaBatteryFull />,
    description: "Standalone systems with battery storage"
  },
  {
    title: "Grid-Tied Systems",
    icon: <FaPlug />,
    description: "Connected to utility grid with net metering"
  },
  {
    title: "Hybrid Systems",
    icon: <FaNetworkWired />,
    description: "Combine solar, battery, and grid power"
  }
];
const Services = () => {
  return (  
    <div className="services-page">
    {/* Video Banner Section (Unchanged) */}
    <section className="services-banner">
      <div className="video-container">
        <video autoPlay loop muted playsInline poster="https://images.unsplash.com/photo-1601342630314-8427c38bf5e6">
          <source src={serviceVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="banner-content">
        <h1>Powering Progress with Solar Solutions</h1>
        <p>Innovative energy services for a sustainable future</p>
      </div>
    </section>

    {/* Main Services Section */}
    <section className="main-services">
      <div className="container">
        <div className="section-header">
          <h2>Core Solar Services</h2>
          <div className="title-divider"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="card-inner">
                <div className="card-front" style={{ borderColor: service.color }}>
                  <div className="icon-container" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <div className="card-back" style={{ backgroundColor: service.color }}>
                  <p>{service.description}</p>
                  <div className="service-ribbon"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Key Services Section */}
    <section className="key-services">
      <div className="container">
        <div className="section-header">
          <h2>Specialized Solutions</h2>
          <div className="title-divider"></div>
        </div>

        <div className="key-services-grid">
          {keyServices.map((service, index) => (
            <div className="key-service-card" key={index}>
              <div className="ks-icon-wrapper">
                {service.icon}
                <div className="pulse-effect"></div>
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="features-list">
                {service.features.map((feature, fIndex) => (
                  <div className="feature-item" key={fIndex}>
                    <FaCheckCircle className="feature-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Additional Services Section */}
    <section className="additional-services">
      <div className="container">
        <div className="section-header">
          <h2>Complementary Solutions</h2>
          <div className="title-divider"></div>
        </div>
        
        <div className="services-grid">
          {additionalServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="card-content">
                <div className="icon-container">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Configuration Systems Section */}
    <section className="configuration-systems">
      <div className="container">
        <div className="section-header">
          <h2>System Configurations</h2>
          <div className="title-divider"></div>
        </div>
        
        <div className="systems-grid">
          <div className="system-image">
            <img src={CONFIG_IMAGE} alt="Solar system configurations" />
          </div>
          <div className="systems-list">
            {configurationSystems.map((system, index) => (
              <div className="system-card" key={index}>
                <div className="system-icon">{system.icon}</div>
                <div className="system-content">
                  <h3>{system.title}</h3>
                  <p>{system.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Net Metering Section */}
    <section className="net-metering">
      <div className="container">
        <div className="metering-content">
          <div className="text-content">
            <h2>Net Metering Solutions</h2>
            <div className="title-divider"></div>
            <p>
              Offset electricity costs by feeding excess solar power back to the grid. 
              Earn credits and reduce payback period with our grid-tied solutions.
            </p>
            <ul className="benefits-list">
              <li><FaCheckCircle /> Reduce electricity bills by up to 70%</li>
              <li><FaCheckCircle /> Government-approved metering systems</li>
              <li><FaCheckCircle /> Real-time energy monitoring</li>
              <li><FaCheckCircle /> Seamless utility integration</li>
            </ul>
          </div>
          <div className="visual-content">
            <img src={NET_METERING_IMAGE} alt="Net metering illustration" />
          </div>
        </div>
      </div>
    </section>
  </div>
);
};

export default Services;