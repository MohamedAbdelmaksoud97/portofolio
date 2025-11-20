import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  features,
  techStack,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden shadow-smooth hover:shadow-lg transition-smooth group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-contain group-hover:scale-105 transition-smooth"
        />
        <div className="absolute inset-0  group-hover:opacity-100 transition-smooth" />
      </div>

      <CardHeader>
        <CardTitle className="text-2xl font-heading">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2 text-sm text-muted-foreground">
            Key Features:
          </h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-sm text-muted-foreground">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            asChild
            className="flex-1 bg-primary hover:bg-primary/60 text-primary-foreground"
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </a>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" />
              Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
