import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
    return (
        <nav style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 2rem",
            background: "#ffffff"
        }}>
            <div style={{ display: "flex", gap: "1rem", fontSize: "1.25rem" }}>
                <a href="/" style={{ marginRight: "1rem", color: "#4285F4" }}>Home</a>
                <a href="/work" style={{ marginRight: "1rem", color: "#EA4335" }}>Work</a>
                <a href="/school" style={{ marginRight: "1rem", color: "#FBBC05" }}>School</a>
                <a href="/projects" style={{ color: "#34A853" }}>Projects</a>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
                <a href="https://instagram.com/matthewiwang" target="_blank">
                    <FaInstagram size={28} style={{ color: "#4285F4" }} />
                </a>
                <a href="https://linkedin.com/in/matthew-wang-cs" target="_blank">
                    <FaLinkedin size={28} style={{ color: "#EA4335" }} />
                </a>
                <a href="https://github.com/matthewwangg" target="_blank">
                    <FaGithub size={28} style={{ color: "#FBBC05" }} />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
