    import React from "react";
    import { projects } from "../data/project";

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
                    boxSizing: "border-box",
                }}
            >
                <h2
                    style={{
                        fontSize: "3.5rem",
                        fontWeight: "bold",
                        color: "#202124",
                        margin: 0,
                        paddingBottom: "1.5rem",
                        textAlign: "center",
                    }}
                >
                    Projects
                </h2>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "1rem",
                        width: "100%",
                        maxWidth: "75rem",
                    }}
                >
                    {projects.map((project) => (
                        <a
                            key={project.name}
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: "calc(50% - 0.5rem)",
                                minWidth: "280px",
                                maxWidth: "100%",
                                flexGrow: 1,
                                borderRadius: "0.75rem",
                                overflow: "hidden",
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                                display: "flex",
                                alignItems: "flex-end",
                                textDecoration: "none",
                                minHeight: "200px",
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.92)",
                                    width: "100%",
                                    padding: "1rem",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: 600,
                                        margin: 0,
                                        color: "#202124",
                                    }}
                                >
                                    {project.name}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.95rem",
                                        color: "#5f6368",
                                        marginTop: "0.5rem",
                                        lineHeight: "1.5",
                                    }}
                                >
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        );
    };

    export default Projects;
