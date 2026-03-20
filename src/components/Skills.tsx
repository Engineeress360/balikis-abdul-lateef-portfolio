const technicalSkills = [
  "Python",
  "Java",
  "C++",
  "PHP",
  "JavaScript",
  "HTML/CSS",
  "MySQLi",
  "Machine Learning",
];

const leadershipSkills = [
  "Debate Coaching",
  "Strategic Communication",
  "Public Speaking",
  "Agile Project Management",
  "Digital Marketing",
  "Mentorship",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A blend of technical depth and leadership capability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-gradient rounded-xl border border-border p-8 space-y-6">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 rounded-lg bg-secondary text-sm text-secondary-foreground font-medium border border-border hover:border-primary/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card-gradient rounded-xl border border-border p-8 space-y-6">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Leadership & Strategy
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {leadershipSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 rounded-lg bg-secondary text-sm text-secondary-foreground font-medium border border-border hover:border-accent/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
