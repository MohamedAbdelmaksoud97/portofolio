import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, ExternalLink, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FORM_ENDPOINT = "https://formspree.io/f/mnnwgyng";

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out — I'll reply shortly.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again or contact me via email.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your internet connection.",
        variant: "destructive",
      });
    }

    setSending(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactLinks = [
    {
      name: "Email",
      icon: Mail,
      value: "mohamedhoarra1@gmail.com",
      url: "mailto:mohamedhoarra1@gmail.com",
    },
    {
      name: "GitHub",
      icon: Github,
      value: "github.com",
      url: "https://github.com/MohamedAbdelmaksoud97",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      value: "linkedin.com",
      url: "https://www.linkedin.com/in/mohamed-abdelmaksoud-045222352/",
    },
    {
      name: "Location",
      icon: MapPin,
      value: "Available Worldwide",
      url: null,
    },
  ];

  const platformLinks = [
    {
      name: "Fiverr",
      icon: ExternalLink,
      description: "Work with me on Fiverr",
      url: "https://www.fiverr.com/s/ljGdj1b",
      color: "bg-[#1DBF73]",
    },
    {
      name: "Upwork",
      icon: ExternalLink,
      description: "Connect on Upwork",
      url: "https://www.upwork.com/freelancers/~015ea34d6861c6bb18",
      color: "bg-[#14A800]",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let’s work together and build something
            great.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="shadow-smooth">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What’s this about?"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project…"
                      required
                      className="mt-2 min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-primary hover:bg-primary/60 text-primary-foreground"
                    size="lg"
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-smooth">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactLinks.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <div
                        key={contact.name}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="text-primary" size={20} />
                        </div>

                        <div className="flex-1">
                          <p className="font-semibold">{contact.name}</p>
                          {contact.url ? (
                            <a
                              href={contact.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-smooth"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">
                              {contact.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Freelance Platforms */}
            <Card className="shadow-smooth">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Let's Collaborate On
                </h2>

                <div className="space-y-4">
                  {platformLinks.map((platform) => {
                    const Icon = platform.icon;

                    return (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Card className="hover:shadow-lg transition-smooth border-2 border-transparent hover:border-primary">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                              <div
                                className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center`}
                              >
                                <Icon className="text-white" size={20} />
                              </div>

                              <div className="flex-1">
                                <p className="font-bold text-lg">
                                  {platform.name}
                                </p>
                                <p className="text-muted-foreground">
                                  {platform.description}
                                </p>
                              </div>

                              <Icon
                                className="text-muted-foreground"
                                size={20}
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="shadow-smooth bg-gradient-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl  font-heading font-bold mb-3 text-foreground">
                  Quick Response Time
                </h3>
                <p className="text-foreground/90">
                  I typically reply within 24 hours. Looking forward to hearing
                  from you!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
