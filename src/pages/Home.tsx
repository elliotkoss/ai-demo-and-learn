import { Link } from "react-router-dom";
import { MessageSquare, Github, Users, Code, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MainLayout from "@/components/MainLayout";
import ProjectCard from "@/components/ProjectCard";
import ResourceCard from "@/components/ResourceCard";
import { SITE } from "@/config";
import { projects } from "@/data/projects";
import { resources } from "@/data/resources";

const Home = () => {
  const featuredProjects = projects.slice(0, 3);
  const featuredResources = resources.slice(0, 4);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {SITE.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {SITE.tagline}
              </p>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                {SITE.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-glow">
                <a href={SITE.discordUrl} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Join Discord
                </a>
              </Button>              
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Our Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a diverse group of builders exploring the cutting edge of AI together
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground">Weekly Meetups</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Join us every {SITE.meeting.when} on {SITE.meeting.where} for demos, discussions, and deep dives into AI topics.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="text-center">
                <Code className="h-12 w-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground">Hands-on Learning</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Learn by building and sharing. From simple experiments to production-ready applications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card">
              <CardHeader className="text-center">
                <Lightbulb className="h-12 w-12 mx-auto text-warning mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground">Real Solutions</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Collaborate on real-world use cases and ask questions to the community to grow your knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Discover what our community has been building
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Tools
              </h2>
              <p className="text-muted-foreground">
                Essential resources recommended by our community
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/resources">
                View All Resources
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with fellow AI enthusiasts, share your projects, and learn together in our friendly community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10">
              <a href={SITE.discordUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-5 w-5 mr-2" />
                Join Discord
              </a>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;