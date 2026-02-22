import { Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="container max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LinkedIn Icon - Top Left */}
        <a
          href="https://linkedin.com/in/imtushaarr"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 group"
          title="Connect on LinkedIn"
        >
          <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-primary/10 transition-all duration-300">
            <Linkedin className="w-5 h-5" />
          </div>
          <span className="hidden sm:inline font-semibold text-sm">Tushar Gupta</span>
        </a>

        {/* Placeholder for future navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Navigation items can be added here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
