interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Foundry Data Quality Framework",
    description:
      "Built a reusable quality-monitoring framework for Foundry pipelines that surfaced schema drift, freshness regressions, and data lineage gaps before downstream releases.",
    technologies: ["TypeScript", "Python"],
  },
  {
    title: "Clinical Registry Intake Toolkit",
    description:
      "Created an ingestion toolkit for cancer registry feeds with validation rules, mapping workflows, and clear audit trails to support regulated reporting.",
    technologies: ["Python", "JavaScript"],
  },
  {
    title: "Privacy-Preserving Analytics Workbench",
    description:
      "Developed internal workflows for de-identified cohort analysis, combining strict access controls with analyst-friendly interfaces for faster insights.",
    technologies: ["TypeScript", "JavaScript", "Python"],
  },
];

const Projects = () => {
  return (
    <section aria-labelledby="selected-projects">
      <p className="font-secondary text-text-light dark:text-darkmode-text-light mb-3 text-sm uppercase tracking-[0.2em]">
        Selected Projects
      </p>
      <h2 id="selected-projects" className="mb-5 text-h4">
        Representative work
      </h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            key={project.title}
            className="bg-light dark:bg-darkmode-light border-border rounded-lg border p-5"
          >
            <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
            <p className="text-text dark:text-darkmode-text mb-3 leading-7">
              {project.description}
            </p>
            <p className="text-text-light dark:text-darkmode-text-light text-sm">
              {project.technologies.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
