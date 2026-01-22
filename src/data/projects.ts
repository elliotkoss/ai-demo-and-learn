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
    title: "Career Amplifier",
    creator: "Elliot Koss",
    description: "Daily job discovery from company job boards only, tailored to you. Browse or sign up to receive fresh roles directly from company sites.",
    imageUrl: "/images/careeramplifier.png",
    links: [
      { href: "https://careeramplifier.com", label: "Website" }
    ],
    tags: ["cursor", "openai", "react", "node", "python"]
  },
  {
    title: "Pebble Words",
    creator: "Rob Strobel",
    description: "A simple, private app for parents to capture those moments, organize them by child, and revisit them later. No public feeds. No followers. Just your family's words, in one place.",
    imageUrl: "/images/pebble_words.png",
    links: [
      { href: "https://www.pebblewords.com/", label: "Website" }
    ],
    tags: ["vercel", "chatgpt", "vs-code"]
  },
  {
    title: "Viaterra",
    creator: "Amanda Unterreiner",
    description: "Enables individuals and organizations to navigate global relocation by matching priorities with trusted proprietary data on visas, taxes, healthcare, and quality of life. Replaces slow, manual research with guided workflows that support both decision-making and execution.",
    imageUrl: "/images/viaterra.png",
    links: [
      { href: "https://viaterra.io/", label: "Website" }
    ],
    tags: ["cursor", "vs-code", "vercel"]
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
];