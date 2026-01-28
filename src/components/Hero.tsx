import { ArrowRight, Github, Linkedin, Mail, Facebook, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Ethical Hacker",
    issuer: "Cisco",
    image: "https://images.credly.com/size/340x340/images/242902b5-f527-42ad-865e-977c9e1b5b58/image.png",
    link: "https://www.credly.com/badges/cf5e89b6-831f-4993-89cc-c176ab9856b4/public_url"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    image: "https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    link: "https://www.credly.com/badges/6f6be9d8-a64f-4ea7-ad40-0cb866c99ac4/public_url"
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    image: "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
    link: "https://www.credly.com/badges/4e183b4e-2011-47f2-969b-6efdcbecb77e/public_url"
  },
  {
    title: "Cloud Week Participant",
    issuer: "Microsoft",
    image: "https://images.credly.com/size/340x340/images/2317bcc1-9396-4f40-b5c7-d8040dec87c2/image.png",
    link: "https://www.credly.com/badges/2ee7f2f8-8d75-41e5-b1ac-325e3471746b/public_url"
  }
];

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
                  Passionate about flying drones, photography, videography, running, cycling, and motorsports enthusiast (F1 & WEC).
                </p>

                {/* Photo - Mobile only (between intro and certifications) */}
                <div className="flex justify-center w-full mt-8 md:hidden">
                  <img
                    src="/ice.jpg"
                    alt="Carl Isaiah Manalili photo"
                    className="inline-block w-72 h-96 rounded-2xl border border-border shadow-2xl object-cover"
                    style={{ aspectRatio: "7/10", objectFit: "cover" }}
                  />
                </div>

                {/* Certifications */}
                <div className="pt-6 w-full">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                    <div className="h-px w-8 bg-primary" />
                    <p className="text-sm">Certifications</p>
                    <div className="h-px w-8 bg-primary" />
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {certifications.map((cert, index) => (
                      <a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex flex-col items-center"
                        title={`${cert.title} - ${cert.issuer}`}
                      >
                        <div className="w-20 h-20 rounded-full bg-secondary/50 p-2 transition-all duration-300 group-hover:scale-150 group-hover:shadow-glow group-hover:z-10">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background border border-border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex items-center gap-1">
                          {cert.title}
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Photo - Desktop only (right side) */}
            <div className="hidden md:flex justify-center md:justify-end w-full md:w-1/2 mt-8 md:mt-0">
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
              onClick={() => {
                if (window.chatbase && typeof window.chatbase === "function") {
                  window.chatbase("open");
                }
              }}
            >
              Chat with CarlBot
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
