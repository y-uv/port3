import { Github, ExternalLink } from "lucide-react"
import styles from './Portfolio.module.css'

const projects = [
  {
    title: "🎯target10",
    description: "aim trainer to test your reflexes",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/y-uv/yuvaim1",
    live: "https://yuvaim1.netlify.app/",
  },
  {
    title: "🥁yuvdaw",
    description: "simple drum sequencer with multiple kits",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/y-uv/daw1",
    live: "https://yuvdaw.netlify.app/",
  },
  {
    title: "10Target",
    description: "An innovative mobile app that simplifies daily tasks for users.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/username/gamma-app",
    live: "https://gamma-app.com",
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className={`text-5xl md:text-7xl lg:text-9xl font-bold mb-12 ${styles.fadeIn} `}>Yuval Smith</h1>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${styles.fadeIn} ${styles.delay1}`}>
        {projects.map((project, index) => (
          <div key={index} className={`space-y-4 ${styles.fadeIn} ${styles[`delay${index + 2}`]}`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover rounded-lg"
            />
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 text-sm">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:underline"
              >
                <Github className="w-4 h-4 mr-1" />
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:underline"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}