import { Mail, MessageSquare, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/config";

const LAST_UPDATED = "August 20, 2026";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-foreground mb-3">{title}</h2>
    <div className="space-y-3 text-muted-foreground">{children}</div>
  </section>
);

const Privacy = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Privacy Policy"
        description="How AI Demo & Learn collects, uses, and protects the information you share with us."
      />

      <div className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg border-2 border-primary/10">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
                <Shield className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">
                    {SITE.title} respects your privacy.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Last updated: {LAST_UPDATED}
                  </p>
                </div>
              </div>

              <Section title="Who We Are">
                <p>
                  {SITE.title} is a free educational community dedicated to helping people
                  explore, learn, and discuss artificial intelligence through demonstrations,
                  presentations, and discussion. This policy explains how we handle information
                  provided when you register for our events, visit our website, or otherwise
                  interact with us.
                </p>
              </Section>

              <Section title="Information We Collect">
                <p>
                  We only collect information you voluntarily provide when registering for an
                  event or communicating with us, which may include:
                </p>
                <ul className="space-y-1">
                  {[
                    "Name",
                    "Email address",
                    "Discord username",
                    "Company or organization and job title",
                    "Country or region",
                    "Questions, comments, or other information you choose to share"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  When registration happens through a third-party service such as LinkedIn,
                  that service may pass your registration information to us according to its own
                  privacy practices and your settings with that service.
                </p>
              </Section>

              <Section title="How We Use Your Information">
                <p>We use this information solely to:</p>
                <ul className="space-y-1">
                  {[
                    "Register you for AI Demo & Learn events",
                    "Send event links, calendar invites, reminders, and related updates",
                    "Estimate event attendance and interest",
                    "Respond to your questions or requests",
                    "Share information about future AI Demo & Learn educational events and activities"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Sharing of Information">
                <p>
                  We do not sell, rent, or trade your personal information, and we do not share
                  it with third parties for marketing purposes.
                </p>
                <p>
                  We do use service providers and technology platforms that are necessary to
                  operate our website, events, communications, and registration processes.
                  Information is processed through those services only as needed to provide
                  those functions.
                </p>
              </Section>

              <Section title="Data Retention">
                <p>
                  We keep personal information only as long as it is reasonably necessary for
                  event administration, communications, and the purposes described in this
                  policy.
                </p>
              </Section>

              <Section title="Your Choices">
                <p>
                  Participation in {SITE.title} events is voluntary. You may ask us to update or
                  delete the personal information we hold about you, or ask us to stop sending
                  you future communications, at any time. Just contact us using the details
                  below and we will take care of it.
                </p>
              </Section>

              <Section title="Third-Party Services">
                <p>
                  Our website and events use and link to third-party services such as LinkedIn,
                  Discord, GitHub, YouTube, and online meeting platforms. Those services operate
                  under their own privacy policies and practices, and this policy does not cover
                  them.
                </p>
              </Section>

              <Section title="Changes to This Policy">
                <p>
                  We may update this policy from time to time. Any changes will be reflected on
                  this page along with an updated revision date.
                </p>
              </Section>

              <Section title="Contact">
                <p>
                  If you have questions about this policy or about how {SITE.title} uses
                  personal information, please reach out:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button variant="outline" asChild>
                    <a href={`mailto:${SITE.privacyEmail}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      {SITE.privacyEmail}
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={SITE.discordUrl} target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Ask in Discord
                    </a>
                  </Button>
                </div>
              </Section>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;
