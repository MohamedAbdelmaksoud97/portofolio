import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
  Lightbulb,
} from "lucide-react";
import UXCertificate from "@/assets/ux-google.jpeg"; // <— replace with your actual file

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Code2,
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      icon: Server,
      items: [
        "Node.js",
        "Express",
        "REST APIs",
        "Authentication",
        "Microservices",
      ],
    },
    {
      category: "Database",
      icon: Database,
      items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    },
    {
      category: "UX & Product",
      icon: Lightbulb,
      items: [
        "UX Research",
        "Wireframing",
        "Prototyping",
        "Figma",
        "Google UX Design Diploma",
      ],
    },
    {
      category: "DevOps",
      icon: Globe,
      items: ["Docker", "CI/CD", "Nginx", "AWS", "Vercel Deployment"],
    },
  ];

  const services = [
    "Full-Stack Web Application Development",
    "Product Thinking & UX-Driven Architecture",
    "API Design & Backend Development",
    "Database Modeling & Optimization",
    "UX Design, Wireframes & Prototyping",
    "Cloud Deployment (AWS, Vercel)",
    "Performance Optimization",
    "Technical Guidance & Consultation",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a full-stack developer with a background in engineering and UX
            design — giving me a rare blend of technical depth and product
            thinking.
          </p>
        </div>

        {/* Bio Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="shadow-smooth">
            <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
              <p>
                I'm a <strong>full-stack web developer</strong> with a solid
                foundation in engineering and a passion for building digital
                products that are both functional and delightful. I graduated
                with a degree in <strong>Mechatronics Engineering</strong> — a
                field that taught me systems thinking, problem-solving, and
                logical design.
              </p>

              <p>
                Over the past <strong>2 years</strong>, I have focused on modern
                web development, mastering technologies across the full stack. I
                specialize in crafting intuitive frontends, building scalable
                backends, and deploying production-ready applications.
              </p>

              <p>
                I also earned a professional{" "}
                <strong>UX Design Diploma from Google</strong>, which expanded
                my ability to understand users, design better flows, and
                approach development with strong product thinking.
              </p>

              <p>
                This combination of{" "}
                <strong>engineering + UX + full-stack development</strong>{" "}
                allows me to build complete products — from idea, to design, to
                code, to deployment.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Certificate Section */}
        <div className="max-w-md mx-auto mb-20">
          <h2 className="text-3xl font-heading font-bold text-center mb-6">
            Google UX Design Diploma
          </h2>
          <Card className="shadow-smooth">
            <CardContent className="p-4">
              <img
                src={UXCertificate}
                alt="Google UX Certificate"
                className="rounded-xl shadow-md w-full"
              />
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <Card
                  key={skillGroup.category}
                  className="shadow-smooth hover:shadow-lg transition-smooth"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-heading font-semibold">
                        {skillGroup.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            What I Offer
          </h2>

          <Card className="shadow-smooth">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
