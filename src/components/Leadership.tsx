import { Award, Users, BookOpen } from "lucide-react";

const roles = [
  {
    icon: BookOpen,
    title: "Debate Coach",
    org: "University Debate Society",
    period: "2023 – Present",
    description:
      "Trained 14+ students, achieving a 100% qualification rate in competitions. Developed curriculum for argument construction and public speaking.",
    badges: ["14+ Students", "100% Qual. Rate", "Curriculum Design"],
  },
  {
    icon: Award,
    title: "Electoral Committee Chair",
    org: "Student Government Association",
    period: "2022 – 2023",
    description:
      "Digitized voting for 400+ students, reducing processing time by 60%. Managed a committee of 12 volunteers to ensure fair and transparent elections.",
    badges: ["400+ Voters", "60% Faster", "12 Volunteers"],
  },
  {
    icon: Users,
    title: "Peer Mentor",
    org: "CS Department Mentorship Programme",
    period: "2021 – 2023",
    description:
      "Guided first-year Computer Science students through academic challenges, career planning, and technical skill-building.",
    badges: ["First-Year Mentees", "Career Guidance", "Technical Skills"],
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-accent/[0.03] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto space-y-12 sm:space-y-16">
        <div className="space-y-4 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-2">
            Beyond Code
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Leadership & <span className="gradient-text">Strategic Communication</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Roles where I've driven community impact and organisational excellence.
          </p>
        </div>

        <div className="relative space-y-6 sm:space-y-8">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent hidden md:block" />

          {roles.map((role) => (
            <div key={role.title} className="relative md:pl-16 group">
              <div className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-primary bg-background hidden md:flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm p-5 sm:p-6 space-y-3 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <role.icon size={20} />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground">
                      {role.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {role.org} · {role.period}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed md:pl-14">
                  {role.description}
                </p>
                <div className="flex flex-wrap gap-2 md:pl-14 pt-1">
                  {role.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
