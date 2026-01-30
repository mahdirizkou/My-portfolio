import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Backend",
            skills: ["Node.js", "Express", "Python (Django/FastAPI)", "Go", "Rest APIs", "GraphQL"]
        },
        {
            title: "Database & Data",
            skills: ["PostgreSQL", "MongoDB", "Redis", "SQL Optimization", "Data Modeling"]
        },
        {
            title: "DevOps & Tools",
            skills: ["Docker", "Git / GitHub", "Linux", "AWS (Basic)", "CI/CD Pipelines", "Postman"]
        },
        {
            title: "Frontend (Basics)",
            skills: ["React", "JavaScript (ES6+)", "HTML5 / CSS3", "Vite", "Responsive Design"]
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card">
                            <h3 className="skill-category-title">{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="skill-item">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
