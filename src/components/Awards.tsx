import { Trophy, Star } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "50 Most Reputable Students",
    org: "Faculty of CIS, University of Ilorin",
    year: "2022/2023",
    description:
      "Named among the 50 most reputable students in the Faculty of CIS, University of Ilorin for academic excellence and leadership.",
  },
  {
    icon: Star,
    title: "Best Judge",
    org: "Emirates Verbal Combat",
    year: "2024",
    description:
      "Recognized for excellence in adjudication, demonstrating fairness and expertise in competitive evaluation; at the annual Inter-Faculty Debate competition organized by University of Ilorin.  ",
  },
];

const Awards = () => {
  return (
    <section id="awards" className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Awards & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Honours that reflect my commitment to excellence and impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {awards.map((award) => (
            <div
              key={award.title}
              className="relative overflow-hidden card-gradient rounded-xl border border-primary/30 p-8 space-y-4 glow-shadow"
            >
              {/* Decorative glow circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />

              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/15 text-primary shrink-0">
                  <award.icon size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {award.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {award.org} · {award.year}
                  </p>
                </div>
              </div>
              <p className="relative text-sm text-muted-foreground leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
