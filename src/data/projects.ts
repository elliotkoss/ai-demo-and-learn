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
    title: "Image Remix with ComfyUI",
    creator: "John Smith",
    description: "Advanced image-to-image transformations using ComfyUI workflows. Supports style transfer, inpainting, and complex multi-step image generation pipelines.",
    imageUrl: "/images/comfyui-remix.jpg",
    links: [
      { href: "https://github.com/johnsmith/comfyui-remix", label: "GitHub" }
    ],
    tags: ["comfyui", "image"]
  },
  {
    title: "Personalized Code Reviewer",
    creator: "Alex Ray",
    description: "Claude-powered code linter that learns your team's style guide and provides personalized feedback. Integrates with GitHub Actions for automated code reviews.",
    imageUrl: "/images/code-reviewer.jpg",
    links: [
      { href: "https://github.com/alexray/code-reviewer-ai", label: "GitHub" }
    ],
    tags: ["devtools", "agents"]
  }
];