import { Calendar, Clock, MapPin, MessageSquare, Github, Users, Code, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/config";

const Join = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Join Our Community"
        description="Connect with fellow AI enthusiasts, share your projects, and learn together. Everyone is welcome, regardless of experience level."
      >
        <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-glow">
          <a href={SITE.discordUrl} target="_blank" rel="noopener noreferrer">
            <MessageSquare className="h-5 w-5 mr-2" />
            Join Discord Now
          </a>
        </Button>
      </PageHeader>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meeting Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Weekly Meetups</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">When</h3>
                    <p className="text-muted-foreground">Every week</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-card-foreground">
                  {SITE.meeting.when}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Recurring weekly sessions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">Where</h3>
                    <p className="text-muted-foreground">Virtual meetup</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-card-foreground">
                  {SITE.meeting.where}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Voice and video chat
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What to Expect</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-card shadow-card text-center">
              <CardHeader>
                <Code className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-lg font-semibold text-card-foreground">Live Demos</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Community members showcase their latest AI projects and experiments
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-accent mb-4" />
                <h3 className="text-lg font-semibold text-card-foreground">Discussions</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Deep dives into AI topics, trends, and emerging technologies
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card text-center">
              <CardHeader>
                <Coffee className="h-12 w-12 mx-auto text-warning mb-4" />
                <h3 className="text-lg font-semibold text-card-foreground">Networking</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Connect with like-minded builders and potential collaborators
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card text-center">
              <CardHeader>
                <Clock className="h-12 w-12 mx-auto text-success mb-4" />
                <h3 className="text-lg font-semibold text-card-foreground">Learning</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Learn from experts and discover new tools and techniques
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How to Contribute */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How to Contribute</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <h3 className="text-xl font-semibold text-card-foreground flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Join the Conversation
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Start by joining our Discord community. Introduce yourself, share what you're working on, 
                  and participate in discussions.
                </p>
                <Button asChild>
                  <a href={SITE.discordUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Join Discord
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <h3 className="text-xl font-semibold text-card-foreground flex items-center">
                  <Github className="h-5 w-5 mr-2" />
                  Share Your Projects
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Add your AI projects to our community showcase by submitting a pull request to our GitHub repository. 
                  Include demos, code, and documentation.
                </p>
                <Button variant="outline" asChild>
                  <a href={SITE.githubRepo} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View GitHub Repo
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <h3 className="text-xl font-semibold text-card-foreground flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Present at Meetups
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share your work with the community during our weekly meetups. Whether it's a quick demo or 
                  a deep technical discussion, all contributions are welcome.
                </p>
                <Button variant="outline" asChild>
                  <a href={SITE.discordUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Schedule a Demo
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-lg p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Join our vibrant community of AI builders and learners today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10">
                  <a href={SITE.discordUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Join Discord
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10">
                  <a href={SITE.githubRepo} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Join;