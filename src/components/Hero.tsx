import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative max-w-3xl text-center space-y-8 animate-fade-up">
        <div className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-muted-foreground text-sm font-medium tracking-wide">
          Open to Opportunities
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          Balikis<br />
          <span className="gradient-text">Abdul-Lateef</span>
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-muted-foreground">
          Software Developer & Communications Strategist
        </p>

        <p className="text-base sm:text-lg text-muted-foreground/80 max-w-xl mx-auto leading-relaxed">
          Computer Science graduate with a passion for building scalable software
          and empowering communities through strategic communication, debate coaching,
          and mentorship.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
