"use client";

import React from "react";
import { projects, googleColor } from "../data/project";

const Projects = () => {
    return (
        <section
            id="projects"
            style={{
                padding: "6rem 2rem",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h2
                style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#202124",
                    marginBottom: "2.5rem",
                    letterSpacing: "-0.02em",
                }}
            >
                Projects
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: "1rem",
                    width: "100%",
                    maxWidth: "900px",
                }}
            >
                {projects.map((project, i) => (
                    <a
                        key={project.name}
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            borderLeft: `3px solid ${googleColor(i)}`,
                            padding: "1.25rem 1.25rem 1.25rem 1.25rem",
                            backgroundColor: "#fafafa",
                            borderRadius: "0 0.5rem 0.5rem 0",
                            textDecoration: "none",
                            transition: "background 0.15s",
                            gap: "0.5rem",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#f1f3f4")}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#fafafa")}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <span
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "#202124",
                                }}
                            >
                                {project.name}
                            </span>
                            <span style={{ color: "#9aa0a6", fontSize: "0.85rem", flexShrink: 0, marginLeft: "0.5rem" }}>↗</span>
                        </div>
                        <p
                            style={{
                                fontSize: "0.875rem",
                                color: "#5f6368",
                                margin: 0,
                                lineHeight: "1.55",
                            }}
                        >
                            {project.description}
                        </p>
                        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                            {project.tags.map(tag => (
                                <span
                                    key={tag}
                                    style={{
                                        fontSize: "0.7rem",
                                        color: googleColor(i),
                                        border: `1px solid ${googleColor(i)}`,
                                        borderRadius: "999px",
                                        padding: "0.1rem 0.55rem",
                                        fontWeight: 500,
                                        opacity: 0.85,
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
