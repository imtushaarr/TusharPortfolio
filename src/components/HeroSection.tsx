import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating neural dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="neural-dot"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            background: i % 2 === 0
              ? 'hsl(215 80% 55% / 0.4)'
              : 'hsl(25 95% 55% / 0.3)',
          }}
        />
      ))}

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-primary/10 blur-[80px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass text-sm font-mono text-muted-foreground tracking-wider">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse-glow" />
            SOFTWARE DEVELOPER
          </div>
        </div>

        <h1 className="animate-slide-up animate-slide-up-delay-1 text-5xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="text-foreground">Tushar </span>
          <span className="text-gradient">Gupta</span>
        </h1>

        <p className="animate-slide-up animate-slide-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Computer Science graduate passionate about full-stack development, AI-powered solutions, and building scalable web applications.
        </p>

        <div className="animate-slide-up animate-slide-up-delay-3 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <a href="mailto:tusharguptagps@gmail.com" className="flex items-center gap-2 glass px-4 py-2 rounded-full hover:border-primary/50 transition-all duration-300 hover:glow-orange">
            <Mail className="w-4 h-4 text-primary" />
            tusharguptagps@gmail.com
          </a>
          <a href="https://linkedin.com/in/imtushaarr" target="_blank" rel="noreferrer" className="flex items-center gap-2 glass px-4 py-2 rounded-full hover:border-secondary/50 transition-all duration-300 hover:glow-blue">
            <Linkedin className="w-4 h-4 text-secondary" />
            imtushaarr
          </a>
          <span className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4 text-primary" />
            Chandigarh, India
          </span>
          <span className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Phone className="w-4 h-4 text-secondary" />
            +91-9893741437
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
