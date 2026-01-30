import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for form submission logic
        alert('Thanks for reaching out! (This is a demo)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-intro">
                    I'm currently looking for new opportunities in backend development.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn submit-btn">Send Message</button>
                </form>

                <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:email@example.com">Email</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
