import React from "react";
import { projects } from "../data/projects";
import "../styles/Projects.css";

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article key={project.id} className="p-card">
                            {/* Image */}
                            <div className="p-media">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    onError={(e) => {
                                        // fallback إذا الصورة ما لقاتش
                                        e.currentTarget.style.display = "none";
                                        e.currentTarget.parentElement.classList.add("p-media-fallback");
                                    }}
                                />
                            </div>

                            {/* Body */}
                            <div className="p-body">
                                <h3 className="p-title">{project.title}</h3>
                                <p className="p-desc">{project.description}</p>

                                <div className="p-tags">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="p-tag">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="p-actions">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-btn"
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
