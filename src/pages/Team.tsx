import { Globe } from "lucide-react";
import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";

const LinkedInLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

type Founder = {
  name: string;
  linkedin: string;
  website?: string;
  tags: string[];
};

const founders: Founder[] = [
  { name: "Elliot Koss", linkedin: "https://www.linkedin.com/in/elliotkoss", website: "https://elliotkoss.com", tags: ["Founder", "Steering Committee"] },
  { name: "Rob Strobel", linkedin: "https://www.linkedin.com/in/rstrobel/", website: "https://www.pebblewords.com/", tags: ["Founder", "Steering Committee"] },
  { name: "Jenna Adams-Valadez", linkedin: "https://www.linkedin.com/in/jenna-adams-valadez", website: "https://theleaneye.com/", tags: ["Co-Founder", "Steering Committee"] },
  { name: "Amanda Unterreiner", linkedin: "https://www.linkedin.com/in/amanda-unterreiner-cfa-mba/", website: "https://viaterra.io/", tags: ["Co-Founder"] },
  { name: "Ben Faust", linkedin: "https://www.linkedin.com/in/benjamin-faust/", tags: ["Co-Founder"] },
  { name: "David Farrell", linkedin: "https://www.linkedin.com/in/davidpfarrell/", tags: ["Co-Founder"] },
  { name: "Heneu Tan", linkedin: "https://www.linkedin.com/in/heneu-tan-8bab8219/", tags: ["Co-Founder"] },
  { name: "Kati McCoy", linkedin: "https://www.linkedin.com/in/katimccoy/", tags: ["Co-Founder"] },
  { name: "Shadin Cornelio", linkedin: "https://www.linkedin.com/in/shadincornelio", tags: ["Co-Founder"] },
  { name: "Zachary Nelson", linkedin: "https://www.linkedin.com/in/zacharynelson/", tags: ["Co-Founder"] },
];

const Team = () => {
  return (
    <MainLayout>
      <PageHeader title="Founding Team" description="Meet the folks behind AI Demo & Learn" />

      <div className="container mx-auto py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {founders.map((member) => (
            <div key={member.linkedin} className="bg-gradient-card shadow-card rounded-lg p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{member.name}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A66C2] hover:text-[#004182]"
                >
                  <LinkedInLogo className="h-5 w-5" />
                </a>
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Team;


