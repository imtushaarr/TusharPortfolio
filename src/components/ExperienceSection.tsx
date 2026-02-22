import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Experience</h2>
        <p className="text-muted-foreground mb-10 text-sm">Professional journey</p>

        <div className="glass rounded-xl p-6 md:p-8 hover:glow-blue transition-all duration-500">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-secondary/10 text-secondary shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
                <h3 className="text-lg font-semibold text-foreground">Software Developer Trainee</h3>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  Jul 2025 – Jan 2026
                </span>
              </div>
              <p className="text-primary font-medium text-sm mb-4">Infosys Limited, Chandigarh</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">▸</span>
                  Mastered Java and OOP principles, designing efficient data structures for scalable modules.
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary mt-1.5 shrink-0">▸</span>
                  Integrated Jenkins CI/CD pipelines, achieving 30% faster code builds.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">▸</span>
                  Built AI-powered automation workflows with Python, optimizing efficiency by 25%.
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary mt-1.5 shrink-0">▸</span>
                  Collaborated in Agile/Scrum teams through complete SDLC phases.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
