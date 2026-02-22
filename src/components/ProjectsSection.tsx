import { ExternalLink, Layers, Mail as MailIcon } from "lucide-react";

const projects = [
  {
    title: "ProjectVerse",
    subtitle: "Project Marketplace Platform",
    tech: ["React.js", "Node.js", "Express.js", "Firebase", "Socket.io"],
    points: [
      "Full-stack marketplace with real-time chat, secure auth, and Razorpay payments.",
      "RESTful APIs + WebSocket for live messaging, boosting engagement by 35%.",
      "Optimized load time by 20% via code splitting and lazy loading.",
    ],
    accent: "primary",
  },
  {
    title: "AutoMailer",
    subtitle: "Automated Email Forwarding System",
    tech: ["React.js", "Node.js", "Express.js", "Nodemailer"],
    points: [
      "Intelligent IMAP/SMTP email routing, improving accuracy by 20%.",
      "Real-time analytics dashboard for monitoring forwarding activity.",
      "Secure auth and error handling for 99.5% system uptime.",
    ],
    accent: "secondary",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Projects</h2>
        <p className="text-muted-foreground mb-10 text-sm">Featured work</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`glass rounded-xl p-6 hover:${project.accent === 'primary' ? 'glow-orange' : 'glow-blue'} transition-all duration-500 group`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${project.accent === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                  {project.accent === 'primary' ? <Layers className="w-5 h-5" /> : <MailIcon className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${project.accent === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {project.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className={`mt-1.5 shrink-0 ${project.accent === 'primary' ? 'text-primary' : 'text-secondary'}`}>▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
