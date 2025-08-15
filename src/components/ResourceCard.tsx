import { ExternalLink, Gift } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Resource } from "@/data/resources";

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Card className="group h-full bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg leading-tight text-card-foreground">
            {resource.name}
          </h3>
          {resource.deals && resource.deals.length > 0 && (
            <Gift className="h-4 w-4 text-warning shrink-0 ml-2" />
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pb-3 space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {resource.description}
        </p>

        {/* Deals */}
        {resource.deals && resource.deals.length > 0 && (
          <div className="space-y-2">
            {resource.deals.map((deal, index) => (
              <div 
                key={index} 
                className="p-2 rounded-md bg-warning/10 border border-warning/20"
              >
                <div className="flex items-start space-x-2">
                  <Gift className="h-3 w-3 text-warning mt-0.5 shrink-0" />
                  <div className="space-y-1">
                    <p className="text-xs text-warning font-medium">
                      {deal.description}
                    </p>
                    {deal.url && (
                      <Button variant="ghost" size="sm" asChild className="h-auto p-0 text-xs text-warning hover:text-warning">
                        <a href={deal.url} target="_blank" rel="noopener noreferrer">
                          Learn more →
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col items-start space-y-3">
        {/* Tags */}
        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {resource.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Visit link */}
        <Button variant="outline" size="sm" asChild className="w-full">
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3 w-3 mr-2" />
            Visit {resource.name}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;