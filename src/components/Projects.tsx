import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Intrusion Detection System",
    description:
      "Developed a DQN and Q-learning based model to detect network threats, achieving 99.27% accuracy under resource constraints.",
    tags: ["Python", "Reinforcement Learning", "Machine Learning"],
    metric: "99.27%",
    metricLabel: "Detection Accuracy",
    links: [
      { label: "View GitHub", href: "https://github.com/Engineeress360/Reinforcement-Learning-IDS" },
      { label: "View Report", href: "https://drive.google.com/file/d/1lNtQpbhwp6WgJj9BsYme4oxBvnW-VUG0/view?usp=drivesdk" },
    ],
  },
  {
    title: "Shod Systems Nigeria Limited",
    description:
      "A corporate web solution for a Microsoft-certified IT partner, focusing on ERP implementation, BPO services, and vertical business solutions.",
    tags: ["Web Development", "Corporate Solutions"],
    metric: "Live",
    metricLabel: "Production Site",
    links: [
      { label: "Visit Website", href: "https://www.shodsystems.com/" },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A selection of projects that demonstrate my technical skills and
            problem-solving approach.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group card-gradient rounded-xl border border-border p-6 space-y-4 card-hover"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold gradient-text tracking-tight">
                  {project.metric}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {project.metricLabel}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-secondary text-muted-foreground text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    {link.label} <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
