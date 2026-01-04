import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";

type Founder = {
  name: string;
  linkedin: string;
};

const founders: Founder[] = [
  { name: "Elliot Koss", linkedin: "https://www.linkedin.com/in/elliotkoss" },
  { name: "Rob Strobel", linkedin: "https://www.linkedin.com/in/rstrobel/" },
  { name: "Amanda Unterreiner", linkedin: "https://www.linkedin.com/in/amanda-unterreiner-cfa-mba/" },
  { name: "Ben Faust", linkedin: "https://www.linkedin.com/in/benjamin-faust/" },
  { name: "David Farrell", linkedin: "https://www.linkedin.com/in/davidpfarrell/" },
  { name: "Heneu Tan", linkedin: "https://www.linkedin.com/in/heneu-tan-8bab8219/" },
  { name: "Jenna Adams-Valadez", linkedin: "https://www.linkedin.com/in/jenna-adams-valadez" },
  { name: "Kati McCoy", linkedin: "https://www.linkedin.com/in/katimccoy/" },
  { name: "Shadin Cornelio", linkedin: "https://www.linkedin.com/in/shadincornelio" },
  { name: "Zachary Nelson", linkedin: "https://www.linkedin.com/in/zacharynelson/" },
];

const Team = () => {
  return (
    <MainLayout>
      <PageHeader title="Founding Team" description="Meet the folks behind AI Demo & Learn" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {founders.map((member) => (
            <div key={member.linkedin} className="bg-gradient-card shadow-card rounded-lg p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{member.name}</h3>
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


