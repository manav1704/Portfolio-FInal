import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack online store with React and Node.js",
    tags: ["React", "Node", "MongoDB"],
    github: "#",
    live: "#"
  },
  // Add more projects...
];

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="container">
        <h2 className="section-title">Some Things I've Built</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
