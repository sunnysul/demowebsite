import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaSun, FaChevronDown } from 'react-icons/fa';
import '../css/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);
    const menuRef = useRef(null);

    const dropdownItemsAbout = [
        { path: "/aboutus/overview", title: "Company Overview" },
        { path: "/aboutus/mission", title: "Mission & Vision" },
        { path: "/aboutus/history", title: "Our History" },
        { path: "/aboutus/achievements", title: "Achievements" }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                closeAllMenus();
            }
        };

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                menuRef.current && !menuRef.current.contains(event.target)) {
                closeAllMenus();
            }
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
        setActiveDropdown(null);
    };

    const closeAllMenus = () => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
    };

    const handleDropdown = (dropdownName) => {
        setActiveDropdown(prev => prev === dropdownName ? null : dropdownName);
    };

    return (
        <>
            {/* Top Contact Bar */}
            <div className="top-bar">
                <div className="container">
                    <div className="top-content">
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaPhoneAlt className="icon" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="icon" />
                                <span>info@vasundharasolar.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <header className="main-header sticky-top">
                <div className="container">
                    <nav className="navbar" ref={menuRef}>
                        {/* Brand Logo */}
                        <Link to="/" className="brand" onClick={closeAllMenus}>
                            <FaSun className="logo-icon" />
                            <span className="logo-text">
                                VASUNDHARA
                                <span className="logo-sub">Solar Solutions</span>
                            </span>
                        </Link>

                        {/* Navigation Links */}
                        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                            <Link to="/" className="nav-link" onClick={closeAllMenus}>Home</Link>

                            {/* About Us Section */}
                            <div className="dropdown-container" ref={dropdownRef}>
                                <div className="aboutus-wrapper">
                                    <Link 
                                        to="/aboutus" 
                                        className="nav-link"
                                        onClick={closeAllMenus}
                                    >
                                        About Us
                                    </Link>
                                    <button
                                        className="dropdown-chevron-button"
                                        onClick={() => handleDropdown('aboutus')}
                                        aria-label="Toggle about us dropdown"
                                    >
                                        <FaChevronDown className={`dropdown-chevron ${activeDropdown === 'aboutus' ? 'active' : ''}`} />
                                    </button>
                                </div>
                                <ul className={`dropdown-menu ${activeDropdown === 'aboutus' ? 'show' : ''}`}>
                                    {dropdownItemsAbout.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                to={item.path}
                                                className="dropdown-item"
                                                onClick={closeAllMenus}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Regular Links */}
                            {['service', 'contact', 'gallery'].map((path) => (
                                <Link
                                    key={path}
                                    to={`/${path}`}
                                    className="nav-link"
                                    onClick={closeAllMenus}
                                >
                                    {path.charAt(0).toUpperCase() + path.slice(1)}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                            aria-label="Toggle navigation"
                        >
                            <span className="bar" />
                            <span className="bar" />
                            <span className="bar" />
                        </button>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;