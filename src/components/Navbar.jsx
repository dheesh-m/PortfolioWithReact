import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#home" className="nav-link">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" height="24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                <span>Home</span>
            </a>
            <a href="#education" className="nav-link nav-link-education">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                <span>Education</span>
            </a>
            <a href="#projects" className="nav-link nav-link-projects">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" height="24"><path d="M3 7h18M3 12h18M3 17h18"></path></svg>
                <span>Projects</span>
            </a>
            <a href="#skills" className="nav-link nav-link-skills">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" height="24"><path d="M12 20l9-8-9-8-9 8 9 8z"></path></svg>
                <span>Skills</span>
            </a>
            <a href="#certifications" className="nav-link nav-link-certs">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" height="24"><path d="M12 1v22M1 12h22"></path></svg>
                <span>Certifications</span>
            </a>
            <a href="#contact" className="nav-link nav-link-contact">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" height="24"><path d="M21 10a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6z"></path><path d="M3 7l9 6 9-6"></path></svg>
                <span>Contact</span>
            </a>
        </nav>
    );
};

export default Navbar;