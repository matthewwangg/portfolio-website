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
                flex: 1,
                width: "100%",
                padding: "2rem",
                backgroundColor: "#ffffff",
                minHeight: "100vh",
            }}
        >
            <div
                style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginBottom: "1.5rem",
                }}
            >
                <img
                    src="profile.jpg"
                    alt="Matthew Wang"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            </div>
            <h1
                style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "#202124",
                    marginBottom: "1rem",
                }}
            >
                Hi, I&apos;m Matt
            </h1>
            <p
                style={{
                    fontSize: "1.25rem",
                    color: "#5f6368",
                    maxWidth: "700px",
                }}
            >
                Incoming Software Engineer @ Google • BS CS @ ASU
            </p>
        </section>
    );
}

export default Hero;
