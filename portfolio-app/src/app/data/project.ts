export type Project = {
    name: string
    description: string
    repo: string
    tags: string[]
}

const G = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"] as const;
export const googleColor = (i: number) => G[i % G.length];

export const projects: Project[] = [
    {
        name: "Fit Pilot",
        description: "Gemini-based AI fitness coach with a Go REST API, Python gRPC AI microservice, PostgreSQL, and Redis cache, deployed to GKE with Terraform and GitHub Actions CI/CD.",
        repo: "https://github.com/matthewwangg/fit-pilot",
        tags: ["Go", "Python", "gRPC", "PostgreSQL", "JWT", "GKE"],
    },
    {
        name: "Vector Database",
        description: "In-memory vector database in C++20 with HNSW and Flat indexes, WAL persistence, primary/replica replication, LRU query cache, and metrics exposed via gRPC.",
        repo: "https://github.com/matthewwangg/vector-database",
        tags: ["C++20", "gRPC", "HNSW", "WAL", "GKE"],
    },
    {
        name: "Regatta",
        description: "Distributed key-value store in Go with primary/replica replication via 2PC, WAL-backed persistence, snapshotting, and an OpenTelemetry-instrumented gRPC API.",
        repo: "https://github.com/matthewwangg/regatta",
        tags: ["Go", "gRPC", "2PC", "WAL", "Prometheus", "OpenTelemetry"],
    },
    {
        name: "Convoy",
        description: "gRPC-based message queue in C++ with durable append-only message storage on Truck nodes sharded by topics, a registry for lookup, C++ client library, and TLS.",
        repo: "https://github.com/matthewwangg/convoy",
        tags: ["C++20", "gRPC", "Protobuf", "Hashing", "TLS", "Docker"],
    },
    {
        name: "Gateway",
        description: "API gateway in Go that load balances HTTP traffic across backends registered via a custom .svc DSL, with round-robin and least-response-time strategies, and health checks.",
        repo: "https://github.com/matthewwangg/gateway",
        tags: ["Go", "Load Balancer", "DSL Parser", "Docker"],
    },
    {
        name: "Tempo",
        description: "Full-stack productivity app with a kanban board, health tracking, analytics, and Google Calendar sync. Go backend with OAuth2/JWT, deployed on GKE with Helm.",
        repo: "https://github.com/matthewwangg/tempo",
        tags: ["Go", "PostgreSQL", "OAuth2", "GKE", "Prometheus"],
    },
    {
        name: "Fabric",
        description: "Service mesh for Kubernetes in Go. Sidecar proxies intercept traffic via nftables. gRPC control plane that manages configs, health monitoring, and Prometheus metrics.",
        repo: "https://github.com/matthewwangg/fabric",
        tags: ["Go", "gRPC", "Kubernetes", "L4 Proxy", "Prometheus"],
    },
    {
        name: "Imposter",
        description: "Multi-agent reinforcement learning system in Python built on a custom PettingZoo parallel environment. Agents learn crewmate and imposter roles via REINFORCE and PPO.",
        repo: "https://github.com/matthewwangg/imposter",
        tags: ["Python", "PyTorch", "PPO", "REINFORCE", "PettingZoo"],
    },
]
