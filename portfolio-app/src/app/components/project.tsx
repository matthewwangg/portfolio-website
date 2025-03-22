import React from "react"
import { projects } from "../data/project"

const Projects = () => {
    return (
        <section
            id="projects"
            style={{
                height: "100vh",
                padding: "70px 24px",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
            }}
        >
            <h2
                style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "#000",
                    margin: 0,
                    paddingBottom: "6px",
                }}
            >
                Projects
            </h2>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "16px",
                    width: "100%",
                    maxWidth: "1200px",
                    flexGrow: 1,
                    alignItems: "center",
                }}
            >
                {projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            flex: "0 0 calc(50% - 12px)",
                            height: "calc(50% - 12px)",
                            minWidth: "280px",
                            borderRadius: "16px",
                            overflow: "hidden",
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                            display: "flex",
                            alignItems: "flex-end",
                            textDecoration: "none",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                width: "100%",
                                padding: "16px",
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: "20px",
                                    fontWeight: 600,
                                    margin: 0,
                                    color: "#000000",
                                }}
                            >
                                {project.name}
                            </h3>
                            <p
                                style={{
                                    color: "#333333",
                                    fontSize: "14px",
                                    marginTop: "8px",
                                }}
                            >
                                {project.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Projects
