"use client";

import { useState } from "react";
import { courses } from "../data/coursework";

const categoryColors: Record<string, string> = {
    "Core CS":              "#4285F4",
    "Systems":              "#EA4335",
    "AI/ML":                "#34A853",
    "Software Engineering": "#FBBC05",
    "Math":                 "#4285F4",
};

type CourseEntry = { title: string; description: string; category: string };

const groupedCourses = courses.reduce((acc: Record<string, CourseEntry[]>, course) => {
    acc[course.category] = acc[course.category] || [];
    acc[course.category].push(course);
    return acc;
}, {});

function Courses() {
    const [open, setOpen] = useState<string | null>(null);

    return (
        <section
            id="courses"
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
                Coursework
            </h2>

            <div style={{ width: "100%", maxWidth: "600px", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {Object.entries(groupedCourses).map(([category, courseList]) => {
                    const color = categoryColors[category] ?? "#4285F4";
                    const isOpen = open === category;
                    return (
                        <div key={category}>
                            <button
                                onClick={() => setOpen(isOpen ? null : category)}
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0.875rem 1rem",
                                    background: "none",
                                    border: "none",
                                    borderLeft: `3px solid ${color}`,
                                    backgroundColor: isOpen ? "#fafafa" : "transparent",
                                    cursor: "pointer",
                                    borderRadius: "0 0.375rem 0.375rem 0",
                                    transition: "background 0.15s",
                                }}
                            >
                                <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#202124" }}>
                                    {category}
                                </span>
                                <span style={{ fontSize: "0.75rem", color: "#9aa0a6" }}>
                                    {isOpen ? "▲" : "▼"}
                                </span>
                            </button>

                            {isOpen && (
                                <div
                                    style={{
                                        padding: "0.75rem 1rem 0.75rem 1.5rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.875rem",
                                        borderLeft: `3px solid ${color}`,
                                        backgroundColor: "#fafafa",
                                        borderRadius: "0 0 0.375rem 0",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    {courseList.map(course => (
                                        <div key={course.title}>
                                            <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "#202124" }}>
                                                {course.title}
                                            </div>
                                            <div style={{ color: "#5f6368", fontSize: "0.8rem", lineHeight: "1.5", marginTop: "0.2rem" }}>
                                                {course.description}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Courses;
