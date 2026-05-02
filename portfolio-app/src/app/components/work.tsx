import { experiences } from "../data/work";

const dotColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

function Work() {
    return (
        <section
            id="work"
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
                Experience
            </h2>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: "600px",
                    gap: "0",
                }}
            >
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            gap: "1.25rem",
                            paddingBottom: index < experiences.length - 1 ? "2rem" : 0,
                        }}
                    >
                        {/* Timeline */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                            <div
                                style={{
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    backgroundColor: dotColors[index % dotColors.length],
                                    marginTop: "5px",
                                    flexShrink: 0,
                                }}
                            />
                            {index < experiences.length - 1 && (
                                <div
                                    style={{
                                        width: "1px",
                                        flex: 1,
                                        backgroundColor: "#e8eaed",
                                        marginTop: "6px",
                                    }}
                                />
                            )}
                        </div>

                        {/* Content */}
                        <div style={{ paddingBottom: "0.25rem" }}>
                            <div
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "#202124",
                                    lineHeight: "1.4",
                                }}
                            >
                                {exp.role}{" "}
                                <span style={{ color: "#5f6368", fontWeight: 400 }}>@ {exp.company}</span>
                            </div>
                            <div style={{ fontSize: "0.8rem", color: "#9aa0a6", marginTop: "0.2rem" }}>
                                {exp.date}
                            </div>
                            <div style={{ fontSize: "0.875rem", color: "#5f6368", marginTop: "0.35rem" }}>
                                {exp.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Work;
