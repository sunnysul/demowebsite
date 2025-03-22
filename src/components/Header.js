import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaTimes, FaBars } from 'react-icons/fa';
import logo from "../logo/Vasundhara.png";
import "../css/Header.css"

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navRef = useRef(null);
    const dropdownRef = useRef(null);

    const dropdownItems = [
        { path: "/aboutus/principle", title: "Our Principles" },
        { path: "/aboutus/promise", title: "Our Promise" },
        { path: "/aboutus/vision", title: "Vision Mission" },
        { path: "/aboutus/values", title: "Our Values" }
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
                {/* Logo */}
                <Link to="/" className="nav__logo" onClick={closeAllMenus}>
                    <img src={logo} alt="Vasundhara Solar Solutions" />
                </Link>

                {/* Desktop Navigation */}
                <div className={`nav__menu ${isMobileMenuOpen ? 'show-menu' : ''}`}>
                    {/* Close Button for Mobile */}
                    <button 
                        className="nav__close" 
                        onClick={closeAllMenus}
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>

                    {/* Navigation Links */}
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link" onClick={closeAllMenus}>
                                Home
                            </Link>
                        </li>

                        {/* About Us Dropdown */}
                        <li 
                            className="nav__item nav__dropdown"
                            onMouseEnter={() => window.innerWidth > 768 && handleDropdownToggle('about')}
                            onMouseLeave={() => window.innerWidth > 768 && handleDropdownToggle('about')}
                        >
                            <div className="nav__dropdown-header">
                                <Link 
                                    to="/aboutus" 
                                    className="nav__link"
                                    onClick={closeAllMenus}
                                >
                                    About Us
                                </Link>
                                <button
                                    className="nav__dropdown-trigger"
                                    onClick={() => handleDropdownToggle('about')}
                                    aria-expanded={activeDropdown === 'about'}
                                    aria-label="Toggle dropdown"
                                >
                                    <FaChevronDown className={`icon ${activeDropdown === 'about' ? 'rotate' : ''}`} />
                                </button>
                            </div>
                            
                            <ul 
                                className={`nav__submenu ${activeDropdown === 'about' ? 'show-dropdown' : ''}`}
                                ref={dropdownRef}
                            >
                                {dropdownItems.map((item, index) => (
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

                        {/* Other Navigation Items */}
                        {['service', 'gallery', 'team', 'contact'].map((item) => (
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

                {/* Mobile Menu Toggle */}
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
