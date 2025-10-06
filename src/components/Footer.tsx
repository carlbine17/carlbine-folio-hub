import { Github, Linkedin, Mail } from "lucide-react";

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
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a 
              href="#"
              className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
