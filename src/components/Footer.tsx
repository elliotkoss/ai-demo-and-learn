import { Github, MessageSquare, Heart, GitPullRequest, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Main footer text */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Built by the {SITE.title} community</span>
            <Heart className="h-4 w-4 text-destructive" />
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/contribute" className="flex items-center space-x-2">
                <GitPullRequest className="h-4 w-4" />
                <span>Contribute</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a 
                href={SITE.discordUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Discord</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href={SITE.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025–{new Date().getFullYear()} {SITE.title}. Open source and community driven.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;