import { Github, GitPullRequest, MessageSquare, Code, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/config";

const Contribute = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Contribute to AI Demo & Learn"
        description="Help us grow this community by adding your projects, suggesting improvements, and sharing resources."
      >
        <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-glow">
          <a href={SITE.githubRepo} target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 mr-2" />
            View on GitHub
          </a>
        </Button>
      </PageHeader>

      <div className="container mx-auto py-12">
        {/* Important Notice */}
        <Alert className="mb-12 max-w-3xl mx-auto border-warning/50 bg-warning/10">
          <AlertCircle className="h-4 w-4 text-warning" />
          <AlertDescription className="text-sm">
            <strong>Important:</strong> Please do not request changes to the homepage without first discussing 
            them with us in Discord. The homepage is carefully curated to showcase our community's best work.
          </AlertDescription>
        </Alert>

        {/* How to Contribute */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How to Contribute</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Code className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold text-card-foreground">Add Your Project</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Showcase your AI project to the community! We welcome all projects, from simple experiments 
                  to production applications.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-card-foreground text-sm">Steps:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Edit <code className="bg-muted px-1 py-0.5 rounded">src/data/projects.ts</code> in the GitHub codebase</li>
                    <li>Add your project details (title, description, image, links, tags)</li>
                    <li>Add a project image to <code className="bg-muted px-1 py-0.5 rounded">public/images/</code></li>
                    <li>Submit a pull request</li>
                  </ol>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <a href={`${SITE.githubRepo}/blob/main/src/data/projects.ts`} target="_blank" rel="noopener noreferrer">
                    <Code className="h-4 w-4 mr-2" />
                    View projects.ts
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <GitPullRequest className="h-8 w-8 text-accent" />
                  <h3 className="text-xl font-semibold text-card-foreground">Add a Resource/Tool</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Know a great AI tool, platform, or service? Share it with the community!
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-card-foreground text-sm">Steps:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Edit <code className="bg-muted px-1 py-0.5 rounded">src/data/resources.ts</code> in the GitHub codebase</li>
                    <li>Add the resource details (name, URL, description, tags, deals)</li>
                    <li>Submit a pull request</li>
                  </ol>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <a href={`${SITE.githubRepo}/blob/main/src/data/resources.ts`} target="_blank" rel="noopener noreferrer">
                    <Code className="h-4 w-4 mr-2" />
                    View resources.ts
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Github className="h-8 w-8 text-foreground" />
                  <h3 className="text-xl font-semibold text-card-foreground">Suggest Changes</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Found a bug, typo, or have an idea for improvement? We welcome all contributions!
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-card-foreground text-sm">Options:</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Open an issue on GitHub to report bugs or suggest features</li>
                    <li>Submit a pull request with your changes</li>
                    <li>Discuss ideas in Discord first (especially for major changes)</li>
                  </ul>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <a href={`${SITE.githubRepo}/issues/new`} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Open an Issue
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="h-8 w-8 text-success" />
                  <h3 className="text-xl font-semibold text-card-foreground">Join the Discussion</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Not ready to code? No problem! Join our Discord to share ideas, get feedback, 
                  or ask questions.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-card-foreground text-sm">Community Channels:</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>#general - General discussions and intros</li>
                    <li>#showcase - Share your projects</li>
                    <li>#help - Ask for help or advice</li>
                    <li>#ideas - Discuss new features or changes</li>
                  </ul>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <a href={SITE.discordUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Join Discord
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* GitHub Access */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">GitHub Repository</h2>
          
          <Card className="max-w-3xl mx-auto bg-card shadow-card">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Github className="h-16 w-16 mx-auto text-foreground mb-4" />
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  Open Source & Public
                </h3>
                <p className="text-muted-foreground">
                  Our entire website is open source and available on GitHub. Everyone is welcome to view the code, 
                  suggest improvements, and contribute!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href={SITE.githubRepo} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Repository
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`${SITE.githubRepo}/pulls`} target="_blank" rel="noopener noreferrer">
                    <GitPullRequest className="h-4 w-4 mr-2" />
                    View Pull Requests
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guidelines */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Contribution Guidelines</h2>
          
          <Card className="max-w-3xl mx-auto bg-card shadow-card">
            <CardContent className="p-8">
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">✅ Do:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Keep descriptions clear and concise</li>
                    <li>Test your changes locally before submitting</li>
                    <li>Use appropriate tags for projects and resources</li>
                    <li>Optimize images before adding them (keep under 500KB)</li>
                    <li>Follow the existing code style</li>
                    <li><strong>Ask questions in Discord</strong> if anything is unclear or you think something should change</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">❌ Don't:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Request homepage changes without Discord discussion first</li>
                    <li>Add large unoptimized images</li>
                    <li>Submit duplicate projects or resources</li>
                    <li>Include promotional or spammy content</li>
                    <li>Break existing functionality</li>
                  </ul>
                </div>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm">
                    <strong className="text-card-foreground">Questions or Confused?</strong><br />
                    Reach out to <strong className="text-card-foreground">Elliot and the other co-founders</strong> in Discord! 
                    We're here to help clarify anything that's not listed, confusing, or that you think should be improved.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contribute;
