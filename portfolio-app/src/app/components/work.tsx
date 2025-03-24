"use client";

import { useEffect, useState } from "react";
import { experiences } from "../data/work";

function Work() {
    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsCompact(window.innerWidth < 1000);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            id="work"
            style={{
                display: "flex",
                flexDirection: isCompact ? "column" : "row",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
                padding: "6rem 8rem",
                minHeight: "100vh",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    flex: 1,
                    fontSize: "3.5rem",
                    fontWeight: "bold",
                    color: "#202124",
                    textAlign: isCompact ? "center" : "right",
                    paddingRight: isCompact ? 0 : "3rem",
                    lineHeight: "1.2",
                    marginBottom: isCompact ? "2rem" : 0,
                }}
            >
                Work <br /> {!isCompact && "Experience"}
            </div>

            <div
                style={{
                    width: isCompact ? 0 : "4px",
                    background: isCompact ? "transparent" : "#000",
                    height: isCompact ? 0 : "350px",
                    margin: isCompact ? "0" : "0 3rem",
                    borderRadius: "2px",
                }}
            ></div>

            <div
                style={{
                    flex: 2,
                    paddingLeft: isCompact ? 0 : "3rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        style={{
                            position: "relative",
                            marginBottom: "2.5rem",
                            textAlign: "center",
                            maxWidth: "600px",
                        }}
                    >
                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "1.75rem",
                                color: "#4285F4",
                            }}
                        >
                            {exp.role}{" "}
                            <span style={{ color: "#EA4335" }}>@ {exp.company}</span>
                        </div>
                        <div
                            style={{
                                fontSize: "1.2rem",
                                color: "#34A853",
                                marginTop: "0.5rem",
                                fontWeight: "500",
                            }}
                        >
                            {exp.date}
                        </div>
                        <div
                            style={{
                                fontSize: "1.2rem",
                                color: "#FBBC05",
                                marginTop: "0.5rem",
                                lineHeight: "1.6",
                            }}
                        >
                            {exp.description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Work;
