import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <Image
          src={`/images/${project.image}`}
          alt={project.title}
          width={600}
          height={400}
          className="image"
        />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Code
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
