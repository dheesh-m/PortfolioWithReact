import React from 'react';

const Education = () => {
    return (
        <section id="education">
            <h2 className="section-title" style={{ color: '#ADFF00' }}>Education</h2>
            <div className="content-grid">
                <div className="card slide-in">
                    <h3>B.Tech - Computer Engineering</h3>
                    <p>PCU Pimpri Chinchwad University</p>
                    <p className="card-subtitle">2023 - 2027</p>
                </div>
                <div className="card slide-in">
                    <h3>High School</h3>
                    <p>APS</p>
                    <p className="card-subtitle">2022 - 2023</p>
                </div>
                <div className="card slide-in">
                    <h3>School</h3>
                    <p>Anisha Global Cambrige School</p>
                    <p className="card-subtitle">2016 - 2021</p>
                </div>
            </div>
        </section>
    );
};

export default Education;