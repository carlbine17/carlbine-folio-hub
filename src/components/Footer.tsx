import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Carl Isaiah Manalili. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="mailto:carlbine17@gmail.com"
              className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/carl-manalili-0b6b3a115/"
              className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a 
              href="https://github.com/carlbine17"
              className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
            <a 
              href="https://www.facebook.com/musclecarl/"
              className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a 
              href="https://www.instagram.com/carlbine/"
              className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a 
              href="https://www.tiktok.com/@carlbine"
              className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
