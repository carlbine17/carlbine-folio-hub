import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "carlbine17@gmail.com",
    href: "mailto:carlbine17@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 945 348 5168",
    href: "tel:+639453485168",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pampanga, Philippines",
    href: null,
  },
];

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref as any} id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-subtle pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <Card 
                className={`group bg-card border-border hover:border-primary/50 transition-all duration-700 hover:shadow-glow hover:scale-105 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 mx-auto p-4 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </CardContent>
              </Card>
            );

            return info.href ? (
              <a key={index} href={info.href} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>
                {content}
              </div>
            );
          })}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground mb-6">
            Available for freelance opportunities
          </p>
          <a 
            href="mailto:carlbine17@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all shadow-glow hover:shadow-xl"
          >
            <Mail className="h-5 w-5" />
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
