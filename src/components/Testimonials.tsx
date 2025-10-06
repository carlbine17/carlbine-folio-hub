import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Odilon Sese",
    role: "Senior Manager",
    content: "Carl is an exceptional systems engineer who consistently delivers high-quality solutions. His attention to detail and problem-solving abilities make him an invaluable asset to any team.",
    rating: 5,
  },
  {
    name: "Technical Lead",
    role: "Fujitsu",
    content: "Working with Carl on dashboard development was a pleasure. His ability to translate complex requirements into intuitive solutions is remarkable. Highly recommended for any data-driven project.",
    rating: 5,
  },
  {
    name: "Project Manager",
    role: "Accenture",
    content: "Carl's expertise in maintaining legacy systems while implementing modern practices was crucial to our project's success. Professional, reliable, and technically proficient.",
    rating: 5,
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref as any} id="testimonials" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What colleagues and clients say about working together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`bg-card border-border hover:border-primary/50 transition-all duration-700 hover:shadow-glow hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {testimonial.content}
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
