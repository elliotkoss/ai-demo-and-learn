import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";

type Founder = {
  name: string;
  linkedin: string;
  tags: string[];
};

const founders: Founder[] = [
  { name: "Elliot Koss", linkedin: "https://www.linkedin.com/in/elliotkoss", tags: ["Founder", "Steering Committee"] },
  { name: "Rob Strobel", linkedin: "https://www.linkedin.com/in/rstrobel/", tags: ["Founder", "Steering Committee"] },
  { name: "Jenna Adams-Valadez", linkedin: "https://www.linkedin.com/in/jenna-adams-valadez", tags: ["Co-Founder", "Steering Committee"] },
  { name: "Amanda Unterreiner", linkedin: "https://www.linkedin.com/in/amanda-unterreiner-cfa-mba/", tags: ["Co-Founder"] },
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
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Team;


