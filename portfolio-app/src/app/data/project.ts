export type Project = {
    name: string
    description: string
    image: string
    repo: string
}

export const projects: Project[] = [
    {
        name: "Paper Trail",
        description: "A real-time Kanban board and notes app with a React/TypeScript web app and Go REST API.",
        image: "/images/papertrail.png",
        repo: "https://github.com/matthewwangg/paper-trail",
    },
    {
        name: "EPL Prediction",
        description: "Premier League outcome prediction with a React/Node.js web app and a Python machine learning API.",
        image: "/images/epl-predictor.png",
        repo: "https://github.com/matthewwangg/epl-prediction",
    },
    {
        name: "Distributed Key-Value Store",
        description: "A distributed key-value store in Go with consistent hashing, dynamic peer joins/leaves, in-memory storage, and gRPC communication.",
        image: "/images/distributed-kv-store.png",
        repo: "https://github.com/matthewwangg/distributed-kv-store",
    },
    {
        name: "Contract Matching System",
        description: "Let's Technologies contract matching system built with Python, Flask, AWS, Terraform, and Hugging Face models.",
        image: "/images/lets.png",
        repo: "https://www.letstribe.app/",
    },
    {
        name: "Note DB",
        description: "A fast, local-first C++ knowledge base with structured Markdown, full-text indexing, and snapshot-based backup.",
        image: "/images/note-db.png",
        repo: "https://github.com/matthewwangg/note-db",
    },
    {
        name: "gRPC Log Aggregator",
        description: "A gRPC-based C++ system for collecting, storing, streaming, and querying logs across services.",
        image: "/images/grpc-log-aggregator.png",
        repo: "https://github.com/matthewwangg/grpc-log-aggregator",
    }
]
