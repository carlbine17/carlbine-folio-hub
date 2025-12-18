import { ArrowRight, Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-16"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Name as logo */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center w-full md:w-1/2 min-h-[22rem] md:min-h-0 md:justify-center md:items-center mx-auto">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight w-full text-center mx-auto">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent z-10 relative w-full text-center block mx-auto">
                    Carl Isaiah Manalili
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-2 text-muted-foreground mt-2 w-full mx-auto">
                  <div className="h-px w-8 bg-primary" />
                  <p className="text-xl md:text-2xl">Programmer & Systems Engineer</p>
                  <div className="h-px w-8 bg-primary" />
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
                  Detail-oriented Application Systems Engineer with a Bachelor's degree in Computer Science.
                  Skilled in software development, data analysis, and cybersecurity. Specialized in building secure,
                  efficient solutions using modern technologies.
                </p>
                <p className="text-base text-muted-foreground/80 max-w-xl mx-auto leading-relaxed mt-3 italic">
                  Passionate about flying drones, photography, videography, and video/photo editing.
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-8 md:mt-0">
              <img
                src="/ice.jpg"
                alt="Carl Isaiah Manalili photo"
                className="inline-block w-96 h-[32rem] rounded-2xl border border-border shadow-2xl object-cover z-0 md:ml-[20vw]"
                style={{ aspectRatio: "7/10", objectFit: "cover" }}
              />
            </div>
          </div>

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
              href="https://www.linkedin.com/in/carl-manalili-0b6b3a115/"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors hover:shadow-glow"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/carlbine17"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors hover:shadow-glow"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/musclecarl/"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors hover:shadow-glow"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/carlbine/"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors hover:shadow-glow"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@carlbine"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors hover:shadow-glow"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
