const skills = [
  { category: "Languages", items: ["C++", "Python", "JavaScript", "SQL"], color: "primary" },
  { category: "Frontend", items: ["React.js", "HTML5", "CSS3"], color: "secondary" },
  { category: "Backend", items: ["Node.js", "Express.js", "Django", "REST APIs"], color: "primary" },
  { category: "Realtime", items: ["Socket.io", "WebRTC"], color: "secondary" },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Supabase"], color: "primary" },
  { category: "DevOps", items: ["Git", "Docker", "Jenkins", "GitHub Actions"], color: "secondary" },
  { category: "Testing", items: ["Selenium", "Appium", "TDD"], color: "primary" },
  { category: "Methods", items: ["Agile/Scrum", "SDLC", "OOP"], color: "secondary" },
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Skills</h2>
        <p className="text-muted-foreground mb-10 text-sm">Technical expertise</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`glass rounded-xl p-5 hover:${group.color === 'primary' ? 'glow-orange' : 'glow-blue'} transition-all duration-500 group`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className={`text-xs font-mono tracking-wider mb-3 ${group.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                {group.category.toUpperCase()}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full bg-muted/50 text-foreground/80 hover:bg-muted transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
