import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    title: "Application Systems Engineer",
    company: "Fujitsu",
    period: "2022 - 2025",
    responsibilities: [
      "Developed and maintained systems for continuous improvement and optimization",
      "Designed custom dashboards tailored to client specifications using SAP Analytics Cloud",
      "Worked with Java, Python, C#, JavaScript, SQL, SAP HANA, and Palantir",
      "Integrated codebases with Large Language Models and tested outputs for accuracy",
    ],
  },
  {
    title: "Programmer Analyst",
    company: "Accenture",
    period: "2017 - 2018",
    responsibilities: [
      "Maintained legacy systems using COBOL for efficient data processing",
      "Ensured system reliability and data integrity across critical applications",
      "Collaborated with cross-functional teams on system improvements",
    ],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref as any} id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional journey in software development and systems engineering
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className={`bg-card border-border hover:border-primary/50 transition-all duration-700 hover:shadow-glow hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
