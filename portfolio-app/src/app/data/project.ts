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
        name: "Go TCP Chat Server",
        description: "Multi-threaded TCP Go chat server with support for chat rooms and direct messaging between users.",
        image: "/images/go-chat-server.png",
        repo: "https://github.com/matthewwangg/go-tcp-chat-server",
    },
    {
        name: "Infrastructure as Code",
        description: "Let's Technologies Flask web app deployed with Gunicorn/Nginx/Docker to AWS using Terraform configs.",
        image: "/images/lets.png",
        repo: "https://letstribe.app/",
    }
]
