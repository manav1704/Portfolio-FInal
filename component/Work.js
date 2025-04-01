import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: "Modern E-Commerce Platform",
    description: "A full-stack online store with product filtering, cart functionality, and Stripe payments integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/images/ecommerce.jpg",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.vercel.app"
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description: "Kanban-style task board with drag-and-drop functionality and real-time updates using Firebase.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    image: "/images/taskmanager.jpg",
    github: "https://github.com/yourusername/task-manager",
    live: "https://tasks-demo.vercel.app"
  },
  {
    id: 3,
    title: "AI-Powered Blog Generator",
    description: "Web app that generates SEO-optimized blog posts using OpenAI's GPT-3 API.",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS"],
    image: "/images/aiblog.jpg",
    github: "https://github.com/yourusername/ai-blog-generator",
    live: "https://aiblog.vercel.app"
  }
];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects. Each one was built to solve specific problems.
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    <FiGithub /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
