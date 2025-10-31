import { ExternalLink, Github, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const websiteLink = project.links?.find(l => l.label.toLowerCase().includes("website"))?.href;
  return (
    <Card className="group h-full bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        {project.imageUrl && (
          <div className="aspect-video rounded-lg bg-muted overflow-hidden mb-3">
            {websiteLink ? (
              <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            ) : (
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            )}
          </div>
        )}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg leading-tight text-card-foreground">
            {websiteLink ? (
              <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          {project.creator && (
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="h-3 w-3 mr-1" />
              {project.creator}
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-col items-start space-y-3">
        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 w-full">
            {project.links.map((link, index) => (
              <Button 
                key={index} 
                variant="outline" 
                size="sm" 
                asChild
                className="flex-1 min-w-0"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label.toLowerCase().includes('github') ? (
                    <Github className="h-3 w-3 mr-1" />
                  ) : (
                    <ExternalLink className="h-3 w-3 mr-1" />
                  )}
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;