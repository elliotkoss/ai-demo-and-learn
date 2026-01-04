import { Brain, Users, Zap, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import ConsultingForm from "@/components/ConsultingForm";

const Consulting = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="AI Demo & Learn Consulting"
        description="Powered by our community's collective expertise. From strategy to implementation, we help you harness the power of AI for your business."
      >
        <div className="max-w-2xl mx-auto mt-8">
          <Card className="shadow-lg border-2 border-primary/10">
            <CardContent className="p-8 text-left">
              <ConsultingForm />
            </CardContent>
          </Card>
        </div>
      </PageHeader>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What We Offer</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground">AI Strategy & Planning</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">AI readiness assessment and roadmap development</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">Use case identification and prioritization</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">Technology stack recommendations</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">ROI analysis and business case development</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <Zap className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground">Use Case Development</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">Custom AI solution design and prototyping</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">Workflow automation and optimization</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">Data pipeline and model integration</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">Performance monitoring and optimization</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <Users className="h-12 w-12 text-warning mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground">Full-Stack Solutions</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">End-to-end application development</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">Cloud infrastructure setup and management</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">API development and integration</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">User interface and experience design</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground">Model Integration</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">LLM integration and fine-tuning</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">Computer vision and image processing</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">RAG systems and knowledge bases</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm">Multi-modal AI applications</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Who We Are */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Who We Are</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Users className="h-16 w-16 mx-auto text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Community Experts</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Engineers & Data Scientists</h4>
                    <p className="text-muted-foreground text-sm">
                      Experienced professionals with deep technical expertise in AI/ML, 
                      software development, and data engineering.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Product Managers & Creators</h4>
                    <p className="text-muted-foreground text-sm">
                      Strategic thinkers who understand how to translate business needs 
                      into successful AI implementations.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Filmmakers & Designers</h4>
                    <p className="text-muted-foreground text-sm">
                      Creative professionals bringing unique perspectives on AI applications 
                      in media, design, and user experience.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Industry Builders</h4>
                    <p className="text-muted-foreground text-sm">
                      Entrepreneurs and innovators who have built and scaled AI-powered 
                      products and services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card text-center">
              <CardHeader>
                <Zap className="h-12 w-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground">Competitive Pricing</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Community-driven approach means fair, transparent pricing without the overhead 
                  of traditional consulting firms.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card text-center">
              <CardHeader>
                <Brain className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground">Hands-on Expertise</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team actively builds and ships AI products, giving us real-world experience 
                  with the latest tools and techniques.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-warning mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground">Collective Knowledge</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tap into the wisdom of our entire community, not just a single consultant. 
                  Multiple perspectives lead to better solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>


      </div>
    </MainLayout>
  );
};

export default Consulting;