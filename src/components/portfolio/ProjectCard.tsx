import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "./GlassCard";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const ProjectCard = ({ title, description, tech, github, demo }: ProjectCardProps) => {
  return (
    <GlassCard className="p-6 h-full flex flex-col">
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      {(github || demo) && (
        <div className="flex gap-3 pt-2">
          {github && (
            <Button asChild variant="glass" size="sm">
              <a href={github} target="_blank" rel="noreferrer" aria-label={`${title} GitHub`}>
                <Github className="mr-2" /> GitHub
              </a>
            </Button>
          )}
          {demo && (
            <Button asChild variant="hero" size="sm">
              <a href={demo} target="_blank" rel="noreferrer" aria-label={`${title} Demo`}>
                <ExternalLink className="mr-2" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      )}
    </GlassCard>
  );
};

export default ProjectCard;
