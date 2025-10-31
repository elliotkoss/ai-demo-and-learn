export type Project = {
  title: string;
  creator?: string;
  description: string;
  imageUrl?: string;
  links?: { href: string; label: string }[];
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: "Fantasy Book Club",
    creator: "Heneu Tan",
    description: "Bring books to life. Interactive discussions to strengthen your child's comprehension and confidence in speaking using AI.",
    imageUrl: "/images/fantasy-bookclub-ai.png",
    links: [
      //{ href: "https://github.com/janedoe/ai-story-generator", label: "GitHub" },
      { href: "https://fantasybookclub.ai", label: "Website" }
    ],
    tags: ["n8n", "cursor", "audio-ai", "animation"]
  },
  {
    title: "RecapVid",
    creator: "Elliot Koss",
    description: "A fun tool to generate AI videos to roast your fantasy league. Create hilarious recap videos of your fantasy football season using AI-powered video generation.",
    imageUrl: "/images/recapvid.jpg", // Temporary - using smaller image to test
    links: [
      { href: "https://recapvid.com", label: "Website" }
    ],
    tags: ["cursor", "react", "node", "openai"]
  },
  {
    title: "Career Amplifier",
    creator: "Elliot Koss",
    description: "Daily job discovery from company job boards only, tailored to you. Browse or sign up to receive fresh roles directly from company sites.",
    imageUrl: "/images/careeramplifier.png",
    links: [
      { href: "https://careeramplifier.com", label: "Website" }
    ],
    tags: ["cursor", "openai", "react", "node", "python"]
  },
  
];