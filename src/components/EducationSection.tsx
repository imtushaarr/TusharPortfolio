import { GraduationCap, Trophy } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Education & Achievements</h2>
        <p className="text-muted-foreground mb-10 text-sm">Academic background</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-6 hover:glow-blue transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Chandigarh University</h3>
                <p className="text-xs text-muted-foreground">Aug 2021 – June 2025</p>
              </div>
            </div>
            <p className="text-sm text-foreground/90 mb-1">B.E. (Hons.) in Computer Science & Engineering</p>
            <p className="text-sm text-muted-foreground mb-2">Specialization: AI & Machine Learning</p>
            <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-secondary/10 text-secondary">
              CGPA: 7.22
            </span>
          </div>

          <div className="glass rounded-xl p-6 hover:glow-orange transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Achievement</h3>
                <p className="text-xs text-muted-foreground">Hackathon</p>
              </div>
            </div>
            <p className="text-sm text-foreground/90 mb-2">
              <span className="text-primary font-medium">Finalist</span> at InnovaThon'23 (Amity University)
            </p>
            <p className="text-sm text-muted-foreground">
              Developed AI-powered automation system for data analysis and decision-making, competing against 100+ teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
