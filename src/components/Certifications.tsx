import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Ethical Hacker",
    issuer: "Cisco",
    date: "September 2025",
    image: "https://images.credly.com/size/340x340/images/242902b5-f527-42ad-865e-977c9e1b5b58/image.png",
    link: "https://www.credly.com/badges/cf5e89b6-831f-4993-89cc-c176ab9856b4/public_url"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "August 2025",
    image: "https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    link: "https://www.credly.com/badges/6f6be9d8-a64f-4ea7-ad40-0cb866c99ac4/public_url"
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "July 2022",
    image: "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
    link: "https://www.credly.com/badges/4e183b4e-2011-47f2-969b-6efdcbecb77e/public_url"
  },
  {
    title: "Microsoft Partner Cloud Week—Participant",
    issuer: "Microsoft Global Partner Solutions",
    date: "June 2022",
    image: "https://images.credly.com/size/340x340/images/2317bcc1-9396-4f40-b5c7-d8040dec87c2/image.png",
    link: "https://www.credly.com/badges/2ee7f2f8-8d75-41e5-b1ac-325e3471746b/public_url"
  }
];

const Certifications = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certifications" ref={ref} className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-lg transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 mb-4 flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {cert.date}
                  </p>
                  <div className="flex items-center gap-1 text-primary text-sm group-hover:underline">
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
