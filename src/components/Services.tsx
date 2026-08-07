import { Headset, Network, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Headset,
    title: "IT Support & Infrastructure",
    description: "Computer troubleshooting, application support, system administration, and hardware & software installation for reliable day-to-day operations.",
  },
  {
    icon: Network,
    title: "Networking & Troubleshooting",
    description: "Network configuration and diagnostics, from mesh deployments to resolving connectivity issues across wired and wireless environments.",
  },
  {
    icon: TrendingUp,
    title: "Data & Programming",
    description: "Data analytics and programming with Java, Python, C#, SQL, and SAP HANA — turning complex data into actionable business insight.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Cisco-certified in ethical hacking and cybersecurity fundamentals. Identifying vulnerabilities and securing network and application layers.",
  },
];


const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref as any} id="services" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-subtle pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                className={`group bg-card border-border hover:border-primary/50 transition-all duration-700 hover:shadow-glow hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
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
