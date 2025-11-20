import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Code2, Database, Palette, Zap } from "lucide-react";
import beyaaImage from "@/assets/beyaa-project.jpg";
import vitalConnectImage from "@/assets/vital-connect-project.jpg";
import yourImage from "@/assets/me.jpg";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

const Index = () => {
  const techStack = [
    { name: "React", Icon: SiReact },
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "TailwindCSS", Icon: SiTailwindcss },
  ];

  const services = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "End-to-end web applications that are scalable, maintainable, and production-ready.",
    },
    {
      icon: Database,
      title: "Backend Engineering",
      description:
        "Secure APIs, database design, authentication & cloud-ready architectures.",
    },
    {
      icon: Palette,
      title: "UI Engineering",
      description:
        "Pixel-perfect interfaces with attention to detail and usability.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Fast, optimized systems with excellent Core Web Vitals.",
    },
  ];

  const featuredProjects = [
    {
      title: "Beyaa",
      description:
        "A multi-tenant ecommerce platform builder enabling businesses to launch and manage online stores at scale.",
      image: beyaaImage,
      features: [
        "Tenant-isolated store environments",
        "Inventory & product variants",
        "Customizable themes",
        "Authentication & user roles",
      ],
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://beyaa.onrender.com/",
      githubUrl: "https://github.com/MohamedAbdelmaksoud97/Beyaa-app",
    },
    {
      title: "Vital Connect",
      description:
        "Modern healthcare platform connecting patients & doctors with telemedicine and appointment systems.",
      image: vitalConnectImage,
      features: [
        "Appointment scheduling",
        "Electronic medical records",
        "Authentication & role-based access",
      ],
      techStack: ["React", "Express", "MongoDB", "Node.js"],
      liveUrl: "https://vital-connect.onrender.com/",
      githubUrl: "https://github.com/MohamedAbdelmaksoud97/vital-Connect",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — INTRO TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-secondary font-semibold tracking-[0.2em] uppercase">
              Full-Stack Developer & UX-Driven Engineer
            </p>

            <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
              I Turn Ideas Into
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Real, Scalable Products
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl">
              I’m a full-stack developer with a background in engineering and UX
              design. I build complete, user-focused web applications — from
              concept and interface design to backend architecture and
              deployment.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-lg bg-primary hover:bg-primary/80"
              >
                <Link to="/projects">See My Work</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-lg"
              >
                <Link to="/contact">Let&apos;s Work Together</Link>
              </Button>
            </div>
          </motion.div>

          {/* RIGHT — PERSONAL PHOTO / FEATURE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40 blur-3xl rounded-full -z-10"></div>

              <div className="rounded-2xl shadow-lg border bg-white p-3 max-w-sm">
                <img
                  src={yourImage} // <-- insert your imported image here
                  alt="Your Photo"
                  className="rounded-xl object-cover w-full h-[420px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-muted/40 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              What I Do
            </h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
              I create full-stack solutions engineered for real-world
              performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="shadow-md hover:shadow-lg transition-smooth p-6 text-center">
                    <CardContent className="space-y-4">
                      <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="text-foreground" size={32} />
                      </div>
                      <h3 className="text-xl font-heading font-semibold">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Tech Stack
            </h2>
            <p className="text-lg text-muted-foreground mt-3">
              Tools and technologies I use to build efficient, scalable
              applications.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {techStack.map((tech, i) => {
              const Icon = tech.Icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="group p-6 rounded-2xl border border-border/70 bg-background shadow-md hover:shadow-lg hover:-translate-y-1 transition-smooth">
                    <CardContent className="flex flex-col items-center gap-3 p-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="font-medium text-foreground text-sm md:text-base">
                        {tech.name}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-muted/40 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my work focusing on quality, structure, and user
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-10"
            >
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
