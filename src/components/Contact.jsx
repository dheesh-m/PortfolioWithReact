import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <h2 className="section-title" style={{ color: '#663300' }}>Contact / Follow Me</h2>
            <div className="contact-links">
                <a href="https://x.com/DheeshM" target="_blank" rel="noopener noreferrer" className="nav-link-contact">🐦</a>
                <a href="https://www.instagram.com/_dheesh/" target="_blank" rel="noopener noreferrer" className="nav-link-education">📸</a>
                <a href="https://www.linkedin.com/in/dheesh-medekar-019a8a291/" target="_blank" rel="noopener noreferrer" className="nav-link-projects">💼</a>
                <a href="mailto:dheeshm@gmail.com" className="nav-link-skills">📧</a>
            </div>
        </section>
    );
};

export default Contact;