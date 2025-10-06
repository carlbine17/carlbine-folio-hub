import { Code, Database, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Full-stack development using Java, Python, C#, and JavaScript. Building scalable applications with modern frameworks and best practices.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Expert in SQL, SAP HANA, and database optimization. Design and maintain robust data architectures for enterprise applications.",
  },
  {
    icon: TrendingUp,
    title: "Data Analytics",
    description: "Creating insightful dashboards with SAP Analytics Cloud and Palantir. Transform complex data into actionable business intelligence.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Cisco-certified in ethical hacking and cybersecurity fundamentals. Identifying vulnerabilities and implementing secure solutions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-subtle pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technical expertise to drive your projects forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                  animation: "fade-in 0.6s ease-out forwards"
                }}
              >
                <CardHeader>
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
