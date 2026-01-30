import React from "react";
import Lottie from "lottie-react";
import warriorAnim from "../assets/Warrior Winning Cheer Loading.json";
import "../styles/About.css";

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-wrap">
                {/* LEFT STATS (باش نسدّو الفراغ) */}
                <aside className="about-stats-col" aria-label="Quick stats">
                    <div className="stat-item">
                        <span className="stat-number">3+</span>
                        <span className="stat-label">Years Exp</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">20+</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Reliable</span>
                    </div>
                </aside>

                {/* RIGHT BIG CARD (About + Warrior in same card) */}
                <div className="about-card">
                    <div className="about-card-head">
                        <h2 className="section-title">About Me</h2>
                    </div>

                    <div className="about-card-body">
                        {/* TEXT */}
                        <div className="about-text">
                            <p>
                                I am a backend-focused developer who believes that software should be robust,
                                scalable, and maintainable. While I am comfortable with React and modern frontend tools,
                                my true passion lies in architecting servers, designing databases, and optimizing APIs.
                            </p>

                            <p>
                                I don't just write code; I solve problems. Whether it's processing thousands of transactions,
                                ensuring data consistency, or automating complex workflows, I focus on the logic that makes products work.
                            </p>

                            <div className="about-tags" aria-label="Core traits">
                                <span className="about-tag">Discipline</span>
                                <span className="about-tag">Logic</span>
                                <span className="about-tag">Consistency</span>
                            </div>
                        </div>

                        {/* BIG ANIMATION */}
                        <div className="about-anim" aria-label="Warrior animation">
                            <Lottie
                                animationData={warriorAnim}
                                loop
                                autoplay
                                className="warrior-big"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
