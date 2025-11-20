import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import beyaaImage from "@/assets/beyaa-project.jpg";
import vitalConnectImage from "@/assets/vital-connect-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Beyaa",
      description:
        "Multi-tenant ecommerce platform builder similar to Shopify, enabling businesses to create and manage their online stores with powerful features.",
      image: beyaaImage,
      features: [
        "Multi-store management with tenant isolation",
        "Product catalog with variants and inventory tracking",

        "Customizable storefront themes and layouts",
        "Order management and fulfillment system",
      ],
      techStack: ["React", "JavaScript", "Node.js", "PostgreSQL", "Express"],
      liveUrl: "https://beyaa.onrender.com/",
      githubUrl: "https://github.com/MohamedAbdelmaksoud97/Beyaa-app",
    },
    {
      title: "Vital Connect",
      description:
        "Comprehensive healthcare platform connecting doctors and patients with telemedicine, appointment scheduling, and secure medical records management.",
      image: vitalConnectImage,
      features: [
        "Intelligent appointment scheduling system",
        "Secure electronic health records (EHR)",
        "Prescription management and e-prescriptions",
        "Patient history and medical timeline",
      ],
      techStack: ["React", "Express", "MongoDB", "Node.js", "JWT"],
      liveUrl: "https://vital-connect.onrender.com/",
      githubUrl: "https://github.com/MohamedAbdelmaksoud97/vital-Connect",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of full-stack applications showcasing modern web
            development practices, scalable architecture, and exceptional user
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
