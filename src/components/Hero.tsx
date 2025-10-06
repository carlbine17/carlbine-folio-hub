import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Name as logo */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Carl Isaiah Manalili
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <div className="h-px w-8 bg-primary" />
              <p className="text-xl md:text-2xl">Programmer & Systems Engineer</p>
              <div className="h-px w-8 bg-primary" />
            </div>
          </div>

          {/* Summary */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Detail-oriented Application Systems Engineer with expertise in software development, 
            data analysis, and cybersecurity. Specialized in building secure, efficient solutions 
            using modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary"
              onClick={() => scrollToSection("work")}
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <a 
              href="mailto:carlbine17@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors hover:shadow-glow"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="#"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors hover:shadow-glow"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors hover:shadow-glow"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
