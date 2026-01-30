import React, { useMemo } from "react";
import "../styles/Hero.css";

/* ===== Simple VSCode-like syntax highlighter (no libs) ===== */
const tokenizeJS = (code) => {
    const patterns = [
        { type: "comment", regex: /^\/\*\*[\s\S]*?\*\// },          // /** ... */
        { type: "comment", regex: /^\/\/.*/ },                     // // ...
        { type: "string", regex: /^"(?:\\.|[^"\\])*"|^'(?:\\.|[^'\\])*'/ },
        { type: "number", regex: /^\b\d+(?:\.\d+)?\b/ },
        { type: "keyword", regex: /^\b(const|export|function|return)\b/ },
        { type: "keyword2", regex: /^\b(true|false|null|undefined)\b/ },
        { type: "builtin", regex: /^\b(Array|Object|String|Number|Boolean)\b/ },
        { type: "punct", regex: /^[{}\[\]();,.:]/ },
        { type: "operator", regex: /^(=>|===|!==|==|!=|<=|>=|\+|-|\*|\/|=)/ },
        { type: "identifier", regex: /^[A-Za-z_$][A-Za-z0-9_$]*/ },
        { type: "space", regex: /^\s+/ },
        { type: "other", regex: /^./ },
    ];

    const out = [];
    let i = 0;

    while (i < code.length) {
        const slice = code.slice(i);

        let matched = false;
        for (const p of patterns) {
            const m = slice.match(p.regex);
            if (m) {
                const value = m[0];
                out.push({ type: p.type, value });
                i += value.length;
                matched = true;
                break;
            }
        }
        if (!matched) {
            out.push({ type: "other", value: slice[0] });
            i += 1;
        }
    }

    return out;
};

const CodeHighlight = ({ code }) => {
    const tokens = useMemo(() => tokenizeJS(code), [code]);

    return (
        <code className="code-inner">
            {tokens.map((t, idx) => {
                // keep spaces as-is
                if (t.type === "space") return <span key={idx}>{t.value}</span>;
                return (
                    <span key={idx} className={`tok tok-${t.type}`}>
                        {t.value}
                    </span>
                );
            })}
        </code>
    );
};

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    const lineNumbers = useMemo(() => Array.from({ length: 18 }, (_, i) => i + 1), []);

    const codeContent = `/**
 * Mahdi Rizkou — Backend Developer
 * Focus: APIs • Business Logic • Databases
 */

export const profile = {
  name: "Mahdi Rizkou",
  role: "Backend Developer",
  location: "Morocco",
  mission: "Building reliable systems that scale and stay clean.",
};

export const stack = [
  "Node.js / Express",
  "REST APIs",
  "SQL (PostgreSQL / MySQL)",
  "MongoDB",
  "Redis (Basics)",
  "Auth (JWT / Sessions)",
];

export const strengths = {
  architecture: "Modular, maintainable code",
  performance: "Query optimization & caching mindset",
  quality: "Testing-friendly logic and clean structure",
};

export function availableFor() {
  return [
    "API Development",
    "Backend Refactoring",
    "Database Design",
    "Integration & Debugging",
  ];
}

// 👉 Scroll down to see projects & contact.`;

    const badges = ["APIs", "Business Logic", "Databases", "Clean Code"];

    const stats = [
        { label: "FOCUS", value: "Backend Systems" },
        { label: "STYLE", value: "Minimal UI + Strong Logic" },
        { label: "GOAL", value: "Clean, scalable solutions" },
    ];

    const statusItems = [
        { icon: "✔", text: "Ready" },
        { icon: "🟢", text: "API: Online" },
        { icon: "⚡", text: "Build: Stable" },
    ];

    return (
        <section id="hero" className="hero-section" aria-label="Hero introduction">
            <div className="container hero-container">
                {/* LEFT - Code Editor Display */}
                <div className="hero-left">
                    <div className="editor" role="presentation" aria-label="Code editor mockup">
                        <div className="editor-top">
                            <div className="traffic" aria-hidden="true">
                                <span className="dot red" title="Close" />
                                <span className="dot yellow" title="Minimize" />
                                <span className="dot green" title="Maximize" />
                            </div>

                            <div className="tabs" role="tablist">
                                <span className="tab active" role="tab" aria-selected="true">
                                    about_me.ts
                                </span>
                                <span className="tab" role="tab" aria-selected="false">
                                    api_notes.md
                                </span>
                                <span className="tab" role="tab" aria-selected="false">
                                    projects.json
                                </span>
                            </div>

                            <div className="editor-actions">
                                <span className="pill" aria-label="Live status indicator">
                                    <span className="pulse-dot" />
                                    LIVE
                                </span>
                            </div>
                        </div>

                        <div className="editor-body">
                            <div className="gutter" aria-hidden="true">
                                {lineNumbers.map((num) => (
                                    <span key={num}>{num}</span>
                                ))}
                            </div>

                            <pre className="code" aria-label="Code snippet showing developer profile">
                                <CodeHighlight code={codeContent} />
                            </pre>
                        </div>

                        <div className="editor-bottom">
                            {statusItems.map((status, index) => (
                                <span key={index} className="status">
                                    <span className="status-icon" aria-hidden="true">
                                        {status.icon}
                                    </span>
                                    {status.text}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT - Profile Information */}
                <div className="hero-right">
                    <div className="hero-side">
                        <h2 className="hero-role">Backend Developer</h2>

                        <h1 className="hero-title">
                            Mahdi <span className="highlight">Rizkou</span>
                        </h1>

                        <p className="hero-subtitle">
                            I build reliable APIs, clean business logic, and simple React interfaces that actually work.
                        </p>

                        <div className="hero-badges" role="list" aria-label="Technical skills">
                            {badges.map((badge) => (
                                <span key={badge} className="badge" role="listitem">
                                    {badge}
                                </span>
                            ))}
                        </div>

                        <div className="hero-actions">
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="btn"
                                aria-label="Navigate to projects section"
                            >
                                <span>View Projects</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                    <path
                                        d="M8 3L8 13M8 13L13 8M8 13L3 8"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={() => scrollToSection("contact")}
                                className="btn-outline"
                                aria-label="Navigate to contact section"
                            >
                                Contact Me
                            </button>
                        </div>

                        <div className="quick-stats" role="list" aria-label="Quick facts">
                            {stats.map((stat) => (
                                <div key={stat.label} className="stat" role="listitem">
                                    <span className="stat-label">{stat.label}</span>
                                    <span className="stat-value">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated background elements */}
            <div className="hero-bg-shapes" aria-hidden="true">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </section>
    );
};

export default Hero;
