import React from 'react';

const Certifications = () => {
    return (
        <section id="certifications" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
            <h2 className="section-title" style={{ color: '#ffcc99' }}>Certifications</h2>
            <div className="content-grid">
                <div className="card slide-in">
                    <h3>Application Development I: Programming in Java EE</h3>
                    <p className="card-subtitle">Issued by RedHat</p>
                </div>
                <div className="card slide-in">
                    <h3>Blockchain</h3>
                    <p className="card-subtitle">Issued by University at Buffalo</p>
                </div>
                <div className="card slide-in">
                    <h3>Agile with Atlassian Jira</h3>
                    <p className="card-subtitle">Issued by Atlassian</p>
                </div>
            </div>
        </section>
    );
};

export default Certifications;