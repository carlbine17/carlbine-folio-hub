import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
   {
    title: "Lubao Run Club",
    description: "Official home of the Lubao Running Club (LRC), a community-driven group in Pampanga dedicated to promoting fitness, friendship, and personal growth through running.",
    tags: ["React", "TypeScript", "Web Development"],
    link: "https://lrclubaorunclub.site/",
  },
  {
    title: "Wishmas Sparkle",
    description: "Wishmas Sparkle is a festive online hub designed for Christmas gift exchanges. It lets friends and families browse each other’s wishlists, discover thoughtful presents, and prepare for a joyful celebration together.",
    tags: ["React", "TypeScript", "Web Development"],
    link: "https://wishmas-sparkle.onrender.com/",
  },
  {
    title: "Mesh Network Implementation",
    description: "Configured and deployed a multi-node mesh router system, optimizing node placement and network settings to eliminate dead zones and ensure seamless, high-speed wireless connectivity.",
    tags: ["Networking", "Infrastructure", "Troubleshooting"],
  },
  {
    title: "IoT & Smart Home Integration",
    description: "Executed a structured home automation deployment, integrating multiple smart lights, automated switches, and devices into a unified, secure wireless network ecosystem.",
    tags: ["IoT", "Automation", "Network Security"],
  },
  {
    title: "Enterprise Analytics Dashboard Support",
    description: "Provided technical support for client-specific dashboards, troubleshooting data integration issues and optimizing SAP HANA and SQL queries to deliver actionable insights.",
    tags: ["SAP HANA", "SQL", "Data Visualization"],
  },
  {
    title: "LLM Integration Testing",
    description: "Troubleshot and tested custom codebase integrations with Large Language Models, designing rigorous prompts to evaluate system accuracy, adaptability, and performance.",
    tags: ["Python", "LLM", "Testing"],
  },
];


const Portfolio = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref as any} id="work" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcase of technical projects and implementations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group bg-card border-border hover:border-primary/50 transition-all duration-700 hover:shadow-glow hover:scale-105 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <CardHeader>
                  <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex gap-2">
                    {project.link && (
                      <Button 
                        size="icon" 
                        variant="ghost"
                        className="h-8 w-8 hover:bg-primary/10 hover:text-primary"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
