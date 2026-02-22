import { Mail, Linkedin, Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2 text-gradient">Let's Connect</h2>
        <p className="text-muted-foreground text-sm mb-6">Open to opportunities and collaboration</p>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href="mailto:tusharguptagps@gmail.com"
            className="glass px-6 py-3 rounded-full flex items-center gap-2 text-sm hover:glow-orange transition-all duration-300 hover:border-primary/50"
          >
            <Mail className="w-4 h-4 text-primary" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/imtushaarr"
            target="_blank"
            rel="noreferrer"
            className="glass px-6 py-3 rounded-full flex items-center gap-2 text-sm hover:glow-blue transition-all duration-300 hover:border-secondary/50"
          >
            <Linkedin className="w-4 h-4 text-secondary" />
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
          Built with <Heart className="w-3 h-3 text-primary" /> by Tushar Gupta
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
