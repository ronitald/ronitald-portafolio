import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center gap-8 bg-surface px-6 py-16 text-center">
      <h2 className="font-heading text-2xl font-bold">Proyectos</h2>
      <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-3 rounded-lg border p-6 text-left"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="rounded-full border px-3 py-1 text-xs">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 text-sm font-medium">
              {project.demoURL && (
                <a href={project.demoURL} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              )}
              {project.repoURL && (
                <a href={project.repoURL} target="_blank" rel="noopener noreferrer">
                  Código
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
