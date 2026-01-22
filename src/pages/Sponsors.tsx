import { Link } from "react-router-dom";
import { ExternalLink, MessageSquare, Users, Gift, Megaphone, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/config";
import { sponsors } from "@/data/sponsors";

const Sponsors = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Our Sponsors"
        description="Companies and products supporting our community"
      />

      <div className="container mx-auto py-12">
        {/* Sponsors */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            {sponsors.map((sponsor) => (
              <Card key={sponsor.name} className="bg-gradient-card shadow-card">
                <CardHeader className="text-center pb-4">
                                    <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-32 w-auto mx-auto"
                    />
                  </a>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    {sponsor.description}
                  </p>
                  <Button variant="outline" asChild>
                    <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit {sponsor.name}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About Our Community */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            About Our Community
          </h2>

          <Card className="bg-gradient-card shadow-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-primary shrink-0 mt-1" />
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We're a free community for AI learners. Every month, we host public video sessions
                  where we feature AI products and provide hands-on demos. Our goal is to help people
                  learn by doing.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What Sponsors Get */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            What Sponsors Get
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Megaphone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Homepage Visibility</h3>
                    <p className="text-sm text-muted-foreground">
                      Featured sponsor section prominently displayed on our homepage
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Sponsors Page Listing</h3>
                    <p className="text-sm text-muted-foreground">
                      Dedicated listing with your logo, description, and link
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Gift className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Featured Tool Badge</h3>
                    <p className="text-sm text-muted-foreground">
                      Your product listed in our resources with a "Sponsor" badge
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Engaged Audience</h3>
                    <p className="text-sm text-muted-foreground">
                      Marketing exposure to an AI-curious, hands-on learning audience
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What We Ask */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            What We Ask
          </h2>

          <Card className="bg-gradient-card shadow-card max-w-4xl mx-auto">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success shrink-0 mt-1" />
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Provide some tangible benefit to our live public demo audience—whether that's
                  product access, usage credits, or other perks that help people learn hands-on.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                You don't have to demo your product to sponsor, and you don't have to sponsor to demo.
                We're flexible and focused on mutual benefit.
              </p>
            </CardContent>
          </Card>
        </section>

        </div>

      {/* Become a Sponsor CTA - Full Width */}
      <section className="py-16 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />

        <div className="relative container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Become a Sponsor
          </h2>
          <p className="text-lg text-foreground/90 mb-8 max-w-2xl mx-auto">
            Interested in sponsoring? We'd love to hear from you. Reach out to Elliot or Rob
            via our contact form or Discord.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/consulting">
                Contact Us
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
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

export default Sponsors;
