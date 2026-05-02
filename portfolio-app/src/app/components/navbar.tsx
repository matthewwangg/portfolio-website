"use client";

const links = [
    { label: "Home", href: "#hero", color: "#4285F4" },
    { label: "Experience", href: "#work", color: "#EA4335" },
    { label: "Projects", href: "#projects", color: "#34A853" },
    { label: "Courses", href: "#courses", color: "#FBBC05" },
];

function Navbar() {
    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.875rem 2rem",
                backgroundColor: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(8px)",
                borderBottom: "1px solid #f1f3f4",
                gap: "2rem",
            }}
        >
            {links.map(({ label, href, color }) => (
                <a
                    key={href}
                    href={href}
                    style={{
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "#5f6368",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = color)}
                    onMouseLeave={e => (e.currentTarget.style.color = "#5f6368")}
                >
                    <span
                        style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: color,
                            flexShrink: 0,
                        }}
                    />
                    {label}
                </a>
            ))}
        </nav>
    );
}

export default Navbar;
