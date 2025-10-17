import React from 'react';

const Skills = () => {
    return (
        <section id="skills">
            <h2 className="section-title" style={{ color: '#FF00FF' }}>Skills</h2>
            <div className="content-grid">
                <div className="slide-in">
                    <h3>Programming Languages :</h3>
                    <p>C, C++, Python, Java, HTML, CSS, JavaScript, TypeScript</p>
                </div>
                <div className="slide-in">
                    <h3>Frameworks / Tools :</h3>
                    <p>React.js, Next.js, Node.js, Git, VS Code</p>
                </div>
                <div className="slide-in">
                    <h3>Hardware / Platforms :</h3>
                    <p>Raspberry Pi, Arduino, Linux</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;