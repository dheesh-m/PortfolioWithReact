import React from 'react';

const Projects = () => {
    return (
        <section id="projects" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
            <h2 className="section-title" style={{ color: '#660066' }}>Personal Projects</h2>
            <div className="content-grid">
                <a href="https://meetaura.me/" target="_blank" rel="noopener noreferrer" className="card slide-in">
                    <h3>Humanoid</h3>
                    <p>A Humanoid robot with advanced Ai capabilities: Conversational, Facial Recog, Emotional Recog.</p>
                </a>
                <a href="https://apt-2.vercel.app/" target="_blank" rel="noopener noreferrer" className="card slide-in">
                    <h3>APT- Autonomous Personal Transit</h3>
                    <p>A Personal Transit with real time image processing, integrated with TensorFlow and OpenCV.</p>
                </a>
                <div className="card slide-in">
                    <h3>Water Level Indicator</h3>
                    <p>An indicator that gives accurate water level, used to prevent overflow and alert the user.</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;