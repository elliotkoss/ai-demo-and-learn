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
    title: "AI Story Generator",
    creator: "Jane Doe",
    description: "Generates creative short stories from simple prompts using OpenAI's GPT models. Features customizable genres, character archetypes, and story length options.",
    imageUrl: "/images/ai-story-generator.jpg",
    links: [
      { href: "https://github.com/janedoe/ai-story-generator", label: "GitHub" },
      { href: "https://ai-story-demo.vercel.app", label: "Live Demo" }
    ],
    tags: ["gen-ai", "web"]
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