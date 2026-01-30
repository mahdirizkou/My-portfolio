import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <p>&copy; {new Date().getFullYear()} BackendDev. Built with React & Vite.</p>
                <div className="footer-links">
                    <span>Logic First.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
