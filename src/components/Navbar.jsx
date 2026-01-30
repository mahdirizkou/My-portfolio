import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme('light');
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className="nav">
            <div className="nav-container">
                {/* LOGO REMOVED as requested */}
                <div style={{ width: '1px' }}></div>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                    <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
                    <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
                    <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
                </div>

                <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme" style={{ fontSize: '1.2rem' }}>
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>

                    <button className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
