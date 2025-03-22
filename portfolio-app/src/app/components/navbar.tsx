"use client";

import { FaInstagram, FaLinkedin, FaGithub, FaHome, FaBriefcase, FaBook, FaFolderOpen } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar() {
    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsCompact(window.innerWidth < 659);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav
            style={{
                position: "fixed",
                zIndex: 1000,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 2rem",
                background: "#ffffff",
                width: "100%",
                boxSizing: "border-box",
                rowGap: "1rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: isCompact ? "center" : "flex-start",
                    alignItems: "center",
                    gap: "1.25rem",
                    fontSize: isCompact ? "0" : "0.95rem",
                    flexGrow: 1,
                    minWidth: "250px",
                }}
            >
                <a href="#hero" style={{color: "#4285F4", display: "flex", alignItems: "center", gap: "0.4rem"}}>
                    <FaHome size={28}/>
                    {!isCompact && "Home"}
                </a>
                <a href="#work" style={{color: "#EA4335", display: "flex", alignItems: "center", gap: "0.4rem"}}>
                    <FaBriefcase size={28}/>
                    {!isCompact && "Work"}
                </a>
                <a href="#courses" style={{color: "#FBBC05", display: "flex", alignItems: "center", gap: "0.4rem"}}>
                    <FaBook size={28}/>
                    {!isCompact && "Courses"}
                </a>
                <a href="#projects" style={{color: "#34A853", display: "flex", alignItems: "center", gap: "0.4rem"}}>
                    <FaFolderOpen size={28}/>
                    {!isCompact && "Projects"}
                </a>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: isCompact ? "center" : "flex-end",
                    alignItems: "center",
                    gap: "1rem",
                    minWidth: "200px",
                    flex: isCompact ? "1 1 100%" : "0 0 auto",
                }}
            >
                <a href="https://instagram.com/matthewiwang" target="_blank">
                    <FaInstagram size={28} style={{color: "#E4405F"}}/>
                </a>
                <a href="https://linkedin.com/in/matthew-wang-cs" target="_blank">
                    <FaLinkedin size={28} style={{color: "#0077B5"}}/>
                </a>
                <a href="https://github.com/matthewwangg" target="_blank">
                    <FaGithub size={28} style={{color: "#181717"}}/>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
