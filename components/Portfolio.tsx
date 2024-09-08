import { Github, ExternalLink } from "lucide-react"
import styles from './Portfolio.module.css'

const projects = [
  {
    title: "🎯target10",
    description: "standard aim trainer to test your reflexes",
    video: "/target10.mp4",
    github: "https://github.com/y-uv/yuvaim1",
    live: "https://yuvaim1.netlify.app/",
  },
  {
    title: "🥁yuvdaw",
    description: "simple drum sequencer with multiple kits",
    video: "/yuvdaw.mp4",
    github: "https://github.com/y-uv/daw1",
    live: "https://yuvdaw.netlify.app/",
  },
  {
    title: "🎧stem2",
    description: "audio stem splitter using Mel-Band RoFormer model",
    video: "/stem2.mp4",
    github: "https://github.com/y-uv/vocalsplit",
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className={`text-5xl md:text-7xl lg:text-9xl font-bold mb-12 ${styles.fadeIn}`}>Yuval Smith</h1>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${styles.fadeIn} ${styles.delay1}`}>
        {projects.map((project, index) => (
          <div key={index} className={`space-y-4 ${styles.fadeIn} ${styles[`delay${index + 2}`]}`}>
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-[450px] h-[450px] object-contain rounded-md transform transition-transform duration-500 hover:scale-105"
            />
            <h2 className="text-2xl font-semibold font-mono">{project.title}</h2>
            <p className="text-gray-600 text-md font-mono">{project.description}</p>
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
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm hover:underline"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}