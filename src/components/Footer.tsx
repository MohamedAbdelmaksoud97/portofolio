import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import FiverrIcon from "@/assets/fiverr.png";
import UpworkIcon from "@/assets/upwork.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      type: "lucide",
      icon: Github,
      url: "https://github.com/MohamedAbdelmaksoud97",
    },
    {
      name: "LinkedIn",
      type: "lucide",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mohamed-abdelmaksoud-045222352/",
    },
    {
      name: "Fiverr",
      type: "image",
      icon: FiverrIcon,
      url: "https://www.fiverr.com/s/ljGdj1b",
    },
    {
      name: "Upwork",
      type: "image",
      icon: UpworkIcon,
      url: "https://www.upwork.com/freelancers/~015ea34d6861c6bb18",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              MOhamed Abdelmaksoud
            </h3>
            <p className="text-muted-foreground mb-4">
              Full-stack developer crafting modern web experiences with
              cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Connect</h4>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-smooth flex items-center justify-center"
                  >
                    {social.type === "lucide" ? (
                      <Icon size={20} />
                    ) : (
                      <img
                        src={Icon}
                        alt={social.name}
                        className="w-5 h-5 object-contain"
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} mohamedabdelmaksoud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
