import { Mail, Linkedin, Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gradient">Let's Connect</h2>
        <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">Open to opportunities and collaboration</p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          <a
            href="mailto:tusharguptagps@gmail.com"
            className="glass px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm hover:glow-orange transition-all duration-300 hover:border-primary/50"
          >
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0" />
            <span className="hidden sm:inline">Email Me</span>
            <span className="sm:hidden">Email</span>
          </a>
          <a
            href="https://linkedin.com/in/imtushaarr"
            target="_blank"
            rel="noreferrer"
            className="glass px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm hover:glow-blue transition-all duration-300 hover:border-secondary/50"
          >
            <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-secondary shrink-0" />
            LinkedIn
          </a>
        </div>

        <p className="text-[10px] sm:text-xs text-muted-foreground flex items-center justify-center gap-1">
          Built with <Heart className="w-3 h-3 text-primary" /> by Tushar Gupta
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
