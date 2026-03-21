import { ArrowDown, Download, Circle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-6 sm:space-y-8 text-center md:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary text-muted-foreground text-sm font-medium tracking-wide">
              <Circle size={8} className="fill-emerald-400 text-emerald-400 animate-pulse" />
              <span>Available for new opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Balikis Aduke<br />
              <span className="gradient-text">Abdul-Lateef</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-muted-foreground max-w-md mx-auto md:mx-0">
              Bridging Software Engineering with Strategic Leadership.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: Actual image */}
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-secondary border border-border flex items-center justify-center overflow-hidden">
              <img 
              src="/Profile Picture.png"
              alt="Professional Profile"
              ></img>

    
          </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
