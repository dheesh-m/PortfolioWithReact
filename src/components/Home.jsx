import React from 'react';
import profilePic from '../assets/pic.jpg'; // Import the image

const Home = () => {
    return (
        <section id="home">
            <div className="home-container">
                <div className="home-text">
                    <h1>DHEESH MEDEKAR</h1>
                    <p>Software Engineer | Developer | Creator of innovative and efficient solutions</p>
                    <a href="#education" className="portfolio-button">
                        View My Portfolio
                    </a>
                </div>
                <div className="profile-image-container">
                    <img src={profilePic} alt="Profile" className="profile-image" />
                </div>
            </div>
        </section>
    );
};

export default Home;