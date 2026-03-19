import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Study Companion",
    description:
      "A full-stack web app leveraging NLP to generate flashcards, quizzes, and summaries from uploaded lecture notes.",
    tags: ["React", "Python", "OpenAI API"],
    metric: "99.27%",
    metricLabel: "Model Accuracy",
  },
  {
    title: "Campus Event Manager",
    description:
      "A responsive platform for university clubs to create, manage, and promote events with real-time RSVP tracking.",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    metric: "5,000+",
    metricLabel: "Students Served",
  },
  {
    title: "Debate Prep Toolkit",
    description:
      "A research and argument-mapping tool designed for competitive debate teams, featuring timed practice rounds.",
    tags: ["React", "Firebase", "Tailwind"],
    metric: "30+",
    metricLabel: "Teams Using It",
  },
  {
    title: "Personal Finance Dashboard",
    description:
      "An interactive dashboard that visualises spending patterns and provides budgeting insights using chart libraries.",
    tags: ["Next.js", "D3.js", "Supabase"],
    metric: "12",
    metricLabel: "Chart Types",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
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
              className="group card-gradient rounded-xl border border-border p-6 space-y-4 hover:border-primary/40 hover:glow-shadow transition-all duration-300"
            >
              {/* Metric highlight */}
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
              <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline pt-2">
                View Project <ExternalLink size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
