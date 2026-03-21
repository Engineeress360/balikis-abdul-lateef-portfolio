const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            My Professional <span className="gradient-text">Philosophy</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I am a Computer Science graduate who combines technical expertise in AI and Software Development with a proven track record in leadership, debate coaching, and mentorship.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I don't just build solutions; I communicate them effectively. Whether I am developing software or coaching a debate team, my goal is the same: clarity, efficiency, and impact.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm h-64 sm:h-72 rounded-2xl bg-secondary border border-border flex items-center justify-center">
              <div className="text-muted-foreground/40 text-sm font-medium">About Photo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
