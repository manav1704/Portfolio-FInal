const projects = [/*...*/];

export default function Work() {
  return (
    <section>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
