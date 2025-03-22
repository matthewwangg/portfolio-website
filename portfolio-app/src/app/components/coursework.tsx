"use client";

import { useState } from "react";
import { courses } from "../data/coursework";

const groupedCourses = courses.reduce((acc, course) => {
    acc[course.category] = acc[course.category] || [];
    acc[course.category].push(course);
    return acc;
}, {} as Record<string, typeof courses>);

function Courses() {
    const [open, setOpen] = useState<string | null>("");

    const toggle = (category: string) => {
        setOpen(open === category ? null : category);
    };

    return (
        <section
            id="courses"
            style={{
                minHeight: "100vh",
                padding: "6rem 2rem",
                background: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h2
                style={{
                    fontSize: "3.5rem",
                    fontWeight: "bold",
                    color: "#202124",
                    marginBottom: "1.5rem",
                }}
            >
                Coursework
            </h2>

            <div style={{ width: "100%", maxWidth: "900px", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {Object.entries(groupedCourses).map(([category, courseList]) => (
                    <div
                        key={category}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "0.75rem",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                            overflow: "hidden",
                            transition: "all 0.3s ease",
                        }}
                    >
                        <button
                            onClick={() => toggle(category)}
                            style={{
                                width: "100%",
                                textAlign: "left",
                                padding: "1.25rem 1.5rem",
                                fontSize: "1.5rem",
                                fontWeight: "600",
                                background: "#f9f9f9",
                                border: "none",
                                color: "#202124",
                                cursor: "pointer",
                            }}
                        >
                            {open === category ? "▼" : "▶"} {category}
                        </button>

                        {open === category && (
                            <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                {courseList.map((course) => (
                                    <div key={course.title}>
                                        <div style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#4285F4" }}>{course.title}</div>
                                        <div style={{ color: "#5f6368", fontSize: "0.95rem", lineHeight: "1.5" }}>{course.description}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Courses;
