import { BookOpen, ExternalLink, FileText } from "lucide-react";

const Publications = () => {
  return (
    <section id="publications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-2">
            Academic Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Publications & <span className="gradient-text">Research</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Peer-reviewed work that reflects my commitment to rigorous, systematic inquiry.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden">
            {/* Accent top bar */}
            <div className="h-1 w-full bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />

            <div className="p-8 sm:p-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0 mt-1">
                  <BookOpen size={22} />
                </div>
                <div className="space-y-2 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                    A Comprehensive Report on a Keke Payment System for Seamless, Cashless and Convenient Transactions
                  </h3>
                  <p className="text-sm font-medium text-primary/80 flex items-center gap-1.5">
                    <FileText size={14} />
                    Published on ResearchGate
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-16">
                Collaborative research project focused on Keke Payment System. This work was peer-reviewed and published with a DOI, demonstrating my ability to conduct systematic research and technical documentation.
              </p>

              <div className="flex flex-wrap gap-3 pl-0 sm:pl-16">
                <a
                  href="https://www.researchgate.net/profile/Balikis-Abdul-Lateef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  View on ResearchGate <ExternalLink size={14} />
                </a>
                <a
                  href="https://doi.org/10.13140/RG.2.2.29151.06561"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-muted-foreground text-sm font-medium hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  View DOI <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
