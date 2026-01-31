import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

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

                {/* CENTER LINKS */}
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                    <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
                    <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
                    <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
                </div>

                {/* RIGHT SIDE */}
                <div className="nav-actions">

                    <div className="nav-socials">

                        {/* GitHub */}
                        <a href="https://github.com/mahdirizkou" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-.7 1.2-1 .1-.7.4-1 .7-1.2-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24">
                                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v6.4h-4v-5.7c0-1.4 0-3.1-2-3.1s-2.3 1.5-2.3 3v5.8H9z" />
                            </svg>
                        </a>

                        {/* X */}
                        <a href="https://x.com/YOUR_USERNAME" target="_blank" rel="noreferrer" aria-label="X">
                            <svg viewBox="0 0 24 24">
                                <path d="M18.2 2H21l-6.4 7.3L22 22h-6.5l-5-6.6L4.9 22H2l6.9-7.9L2 2h6.6l4.5 6L18.2 2z" />
                            </svg>
                        </a>

                    </div>

                    {/* MOBILE MENU */}
                    <button className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
