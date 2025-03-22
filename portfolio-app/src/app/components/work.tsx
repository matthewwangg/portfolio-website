import { experiences } from "../data/work";

function Work() {
    return (
        <section
            id="work"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                background: "#ffffff",
                padding: "6rem 8rem 4rem 8rem", 
            }}
        >
            <div
                style={{
                    flex: 1,
                    fontSize: "3.5rem",
                    fontWeight: "bold",
                    color: "#202124",
                    textAlign: "right",
                    paddingRight: "3rem",
                    lineHeight: "1.2",
                }}
            >
                Work <br /> Experience
            </div>
            <div
                style={{
                    width: "4px",
                    background: "#000",
                    height: "50%",
                    margin: "0 3rem",
                    borderRadius: "2px",
                }}
            ></div>
            <div style={{ flex: 2, paddingLeft: "3rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        style={{
                            position: "relative",
                            marginBottom: "2.5rem", // Slightly reduced margin to balance spacing
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
