export type Experience = {
    role: string;
    company: string;
    date: string;
    description: string;
};

export const experiences: Experience[] = [
    {
        role: "Software Engineering Intern",
        company: "Google",
        date: "May 2025 - August 2025",
        description: "Vertex AI Search",
    },
    {
        role: "AI/ML Engineering Intern",
        company: "Honeywell",
        date: "May 2024 - August 2024",
        description: "Industrial Automation",
    },
    {
        role: "Software Developer",
        company: "San Diego Supercomputer Center and ASU",
        date: "Jan 2024 - Jan 2025",
        description: "Spatial Ecology Gateway",
    },
    {
        role: "Software Engineering Intern",
        company: "RevolutionParts",
        date: "Oct 2024 - Current",
        description: "Search Engine Optimization / Shipping Profitability",
    }
    /*,
    {
        role: "Undergraduate Teaching Assistant",
        company: "Arizona State University",
        date: "Jan 2024 - May 2024",
        description: "CSE 355 Intro to Theoretical Computer Science",
    },
    {
        role: "Undergraduate Teaching Assistant",
        company: "Arizona State University",
        date: "Jan 2024 - May 2024",
        description: "CSE 340 Principles of Programming Languages",
    }*/
];
