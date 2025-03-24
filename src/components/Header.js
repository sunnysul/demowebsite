import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaTimes, FaBars } from 'react-icons/fa';
import logo from "../logo/Vasundhara.png";
import "../css/Header.css";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navRef = useRef(null);
    const dropdownRef = useRef(null);

    const servicesDropdownItems = [
        { path: "/epc", title: "EPC" },
        { path: "/consultancy", title: "Consultancy" }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                closeAllMenus();
            }
        };

        const handleResize = () => {
            if (window.innerWidth > 768) closeAllMenus();
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const closeAllMenus = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    };

    const handleDropdownToggle = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    return (
        <header className="header" ref={navRef}>
            <nav className="nav container">
                <Link to="/" className="nav__logo" onClick={closeAllMenus}>
                    <img src={logo} alt="Vasundhara Solar Solutions" />
                </Link>

                <div className={`nav__menu ${isMobileMenuOpen ? 'show-menu' : ''}`}>
                    <button 
                        className="nav__close" 
                        onClick={closeAllMenus}
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>

                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link" onClick={closeAllMenus}>
                                Home
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/aboutus" className="nav__link" onClick={closeAllMenus}>
                                About Us
                            </Link>
                        </li>

                        <li 
                            className="nav__item nav__dropdown"
                            onMouseEnter={() => window.innerWidth > 768 && handleDropdownToggle('services')}
                            onMouseLeave={() => window.innerWidth > 768 && handleDropdownToggle('services')}
                        >
                            <div className="nav__dropdown-header">
                                <Link 
                                    to="/service" 
                                    className="nav__link"
                                    onClick={closeAllMenus}
                                >
                                    Services
                                </Link>
                                <button
                                    className="nav__dropdown-trigger"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleDropdownToggle('services');
                                    }}
                                    aria-expanded={activeDropdown === 'services'}
                                    aria-label="Toggle services dropdown"
                                >
                                    <FaChevronDown className={`icon ${activeDropdown === 'services' ? 'rotate' : ''}`} />
                                </button>
                            </div>
                            
                            <ul 
                                className={`nav__submenu ${activeDropdown === 'services' ? 'show-dropdown' : ''}`}
                                ref={dropdownRef}
                            >
                                {servicesDropdownItems.map((item, index) => (
                                    <li key={index} className="nav__subitem">
                                        <Link
                                            to={item.path}
                                            className="nav__sublink"
                                            onClick={closeAllMenus}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {['gallery', 'client','team', 'contact' ].map((item) => (
                            <li key={item} className="nav__item">
                                <Link
                                    to={`/${item}`}
                                    className="nav__link"
                                    onClick={closeAllMenus}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <button 
                    className="nav__toggle"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={isMobileMenuOpen}
                >
                    <FaBars className="icon" />
                </button>
            </nav>
        </header>
    );
};

export default Header;