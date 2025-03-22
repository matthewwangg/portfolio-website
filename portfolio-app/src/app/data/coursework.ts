export type Course = {
    title: string;
    description: string;
    category: string;
};

export const courses: Course[] = [
    // Core CS
    {
        title: "CSE 110 – Principles of Programming",
        description: "Introduction to problem solving and programming using an object-oriented language.",
        category: "Core CS",
    },
    {
        title: "CSE 205 – Object-Oriented Programming and Data Structures",
        description: "Introduction to data structures and algorithms in an object-oriented programming environment.",
        category: "Core CS",
    },
    {
        title: "CSE 230 – Computer Organization and Assembly Language Programming",
        description: "Introduction to computer organization, machine representation of data, and assembly language programming.",
        category: "Core CS",
    },
    {
        title: "CSE 240 – Introduction to Programming Languages",
        description: "Introduction to programming paradigms, including procedural, object-oriented, functional, and logic programming.",
        category: "Core CS",
    },
    {
        title: "CSE 310 – Data Structures and Algorithms",
        description: "Design and analysis of data structures and algorithms.",
        category: "Core CS",
    },
    {
        title: "CSE 340 – Principles of Programming Languages",
        description: "Formal syntax and semantics of programming languages; language paradigms; language design principles.",
        category: "Core CS",
    },
    {
        title: "CSE 355 – Introduction to Theoretical Computer Science",
        description: "Introduction to the theory of formal languages and automata.",
        category: "Core CS",
    },
    {
        title: "CSE 450 – Design and Analysis of Algorithms",
        description: "Design and analysis of computer algorithms using analytical and empirical methods.",
        category: "Core CS",
    },
    {
        title: "CSE 420 – Computer Architecture I",
        description: "Study of computer architecture, focusing on instruction set design, processor implementation, and performance evaluation.",
        category: "Core CS",
    },

    // Systems / Networking / Security
    {
        title: "CSE 330 – Operating Systems",
        description: "Design and implementation of operating systems, including process management, memory management, and file systems.",
        category: "Systems",
    },
    {
        title: "CSE 434 – Computer Networks",
        description: "Introduction to computer networks and data communications.",
        category: "Systems",
    },
    {
        title: "CSE 365 – Information Assurance",
        description: "Introduction to information assurance and security.",
        category: "Systems",
    },
    {
        title: "CSE 445 – Distributed Software Development",
        description: "Introduction to distributed software development and programming.",
        category: "Systems",
    },

    // AI / ML / NLP
    {
        title: "CSE 475 – Foundations of Machine Learning",
        description: "Introduction to machine learning algorithms and their applications.",
        category: "AI/ML",
    },
    {
        title: "CSE 471 – Introduction to Artificial Intelligence",
        description: "Introduction to artificial intelligence concepts and techniques.",
        category: "AI/ML",
    },
    {
        title: "CSE 574 – Planning and Learning Methods in AI",
        description: "Advanced topics in planning and learning methods in artificial intelligence.",
        category: "AI/ML",
    },
    {
        title: "CSE 476 – Natural Language Processing",
        description: "Introduction to natural language processing techniques and applications.",
        category: "AI/ML",
    },

    // Software Engineering & Capstone
    {
        title: "CSE 360 – Introduction to Software Engineering",
        description: "Introduction to software engineering principles and practices.",
        category: "Software Engineering",
    },
    {
        title: "CSE 485 – Computer Science Capstone Project I",
        description: "First part of a two-semester capstone project in computer science.",
        category: "Software Engineering",
    },
    {
        title: "CSE 486 – Computer Science Capstone Project II",
        description: "Second part of a two-semester capstone project in computer science.",
        category: "Software Engineering",
    },

    // Math & Supporting Electives
    {
        title: "MAT 243 – Discrete Mathematical Structures",
        description: "Introduction to discrete mathematical structures and their applications in computer science.",
        category: "Math",
    },
    {
        title: "MAT 343 – Applied Linear Algebra",
        description: "Introduction to linear algebra and its applications.",
        category: "Math",
    },
    {
        title: "IEE 380 – Probability and Statistics for Engineering Problem Solving",
        description: "Introduction to probability and statistics for engineering problem solving.",
        category: "Math",
    },
    {
        title: "IEE 385 – Engineering Statistics: Probability",
        description: "Introduction to engineering statistics and probability.",
        category: "Math",
    },
];
