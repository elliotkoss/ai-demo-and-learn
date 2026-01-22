import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { sponsors } from "@/data/sponsors";

const SponsorBanner = () => {
  const featuredSponsors = sponsors.filter(s => s.featured);

  if (featuredSponsors.length === 0) return null;

  return (
    <section className="pt-12 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {/* Label */}
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/50 mb-8 font-medium">
            Proudly Sponsored By
          </p>

          {/* Sponsor Logo */}
          {featuredSponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mb-6"
            >
              <img
                src={sponsor.logoHorizontal || sponsor.logo}
                alt={sponsor.name}
                className="h-10 md:h-14 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </a>
          ))}

          {/* Learn More Link */}
          <Link
            to="/sponsors"
            className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground/40 hover:text-primary transition-colors inline-flex items-center font-medium mb-6"
          >
            Become a sponsor
            <ArrowRight className="h-3 w-3 ml-1.5" />
          </Link>

          {/* Decorative bottom line */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorBanner;
