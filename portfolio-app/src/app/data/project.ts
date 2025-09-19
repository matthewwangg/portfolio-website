export type Project = {
    name: string
    description: string
    image: string
    repo: string
}

export const projects: Project[] = [
    {
        name: "Fit Pilot",
        description: "A Gemini-based AI fitness coach with a React frontend, Go API, Python AI microservice, Postgres database, and Redis cache, deployed to GKE.",
        image: "/images/fit-pilot.png",
        repo: "https://github.com/matthewwangg/fit-pilot",
    },
    {
        name: "Personal AI Agent",
        description: "A CLI-based personal AI agent that can answer questions with personal context and accomplish complex multi-stage developer tasks autonomously.",
        image: "/images/agent.png",
        repo: "https://github.com/matthewwang/personal-ai-agent",
    },
    {
        name: "Vector Database",
        description: "A performant in-memory vector database built from scratch in C++ with an HNSW index, data persistence via snapshotting and WAL, and replication, deployed to GKE.",
        image: "/images/database.png",
        repo: "https://github.com/matthewwangg/vector-database",
    },
    {
        name: "Gateway",
        description: "A secure API gateway and load balancer built in Go, with service definition parser, service management, configurable load balancer, and secure JWT authentication.",
        image: "/images/gateway.png",
        repo: "https://github.com/matthewwangg/gateway",
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
        name: "gRPC Log Aggregator",
        description: "A gRPC-based C++ system for collecting, storing, streaming, and querying logs across services.",
        image: "/images/grpc-log-aggregator.png",
        repo: "https://github.com/matthewwangg/grpc-log-aggregator",
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
        name: "Paper Trail",
        description: "A real-time Kanban board and notes app with a React/TypeScript web app and Go REST API.",
        image: "/images/papertrail.png",
        repo: "https://github.com/matthewwangg/paper-trail",
    },
]
