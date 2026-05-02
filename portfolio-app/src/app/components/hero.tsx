function Hero() {
    return (
        <section
            id="hero"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                width: "100%",
                padding: "2rem",
                backgroundColor: "#ffffff",
                minHeight: "100vh",
                gap: "1rem",
            }}
        >
            <div
                style={{
                    width: "88px",
                    height: "88px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid #e8eaed",
                    flexShrink: 0,
                }}
            >
                <img
                    src="profile.jpg"
                    alt="Matt"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            </div>

            <div>
                <h1
                    style={{
                        fontSize: "2.25rem",
                        fontWeight: 700,
                        color: "#202124",
                        margin: 0,
                        letterSpacing: "-0.03em",
                    }}
                >
                    Matt Wang
                </h1>
                <p
                    style={{
                        fontSize: "1rem",
                        color: "#5f6368",
                        margin: "0.5rem 0 0",
                    }}
                >
                    Software Engineer{" "}
                    <span style={{ color: "#4285F4" }}>@</span>
                    <span style={{ color: "#EA4335" }}>G</span>
                    <span style={{ color: "#FBBC05" }}>o</span>
                    <span style={{ color: "#4285F4" }}>o</span>
                    <span style={{ color: "#34A853" }}>g</span>
                    <span style={{ color: "#EA4335" }}>l</span>
                    <span style={{ color: "#FBBC05" }}>e</span>
                </p>
                <p style={{ fontSize: "0.875rem", color: "#9aa0a6", margin: "0.4rem 0 0" }}>
                    Gemini Enterprise Agent Platform
                </p>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
                <a
                    href="https://github.com/matthewwangg"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.875rem", color: "#5f6368", textDecoration: "none" }}
                >
                    GitHub ↗
                </a>
                <a
                    href="https://linkedin.com/in/matthew-wang-cs"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.875rem", color: "#5f6368", textDecoration: "none" }}
                >
                    LinkedIn ↗
                </a>
            </div>
        </section>
    );
}

export default Hero;
