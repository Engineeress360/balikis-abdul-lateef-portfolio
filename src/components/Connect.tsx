import { Github, Linkedin, Download } from "lucide-react";

const Connect = () => {
  return (
    <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
      <div className="text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Connect with <span className="gradient-text">Me</span>
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/balikis-abdul-lateef"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Engineeress360"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
