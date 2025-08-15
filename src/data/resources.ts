export type Resource = {
  name: string;
  url: string;
  description: string;
  deals?: { description: string; url?: string }[];
  tags?: string[];
};

export const resources: Resource[] = [
  {
    name: "Lovable",
    url: "https://lovable.dev",
    description: "Turn ideas into beautiful websites in minutes with AI-powered development. Perfect for rapid prototyping and full-stack applications.",
    deals: [
      { 
        description: "Lenny's Podcast perk (verify)",
        url: "https://lovable.dev/lenny"
      }
    ],
    tags: ["no-code", "web"]
  },
  {
    name: "Cursor",
    url: "https://cursor.sh",
    description: "AI-first code editor that understands your codebase. Features intelligent autocomplete, code generation, and natural language editing.",
    tags: ["devtools", "agents"]
  },
  {
    name: "OpenAI API",
    url: "https://openai.com/api",
    description: "Access to GPT models for text generation, completion, and chat applications. Industry-leading language models with extensive API support.",
    tags: ["api", "models"]
  },
  {
    name: "ChatGPT",
    url: "https://chat.openai.com",
    description: "Conversational AI assistant perfect for brainstorming, research, writing, and problem-solving across various domains.",
    tags: ["assistant"]
  },
  {
    name: "Claude Code",
    url: "https://claude.ai",
    description: "Anthropic's coding-focused AI assistant with excellent reasoning capabilities. Great for code review, debugging, and architecture discussions.",
    tags: ["assistant", "devtools"]
  },
  {
    name: "ComfyUI",
    url: "https://github.com/comfyanonymous/ComfyUI",
    description: "Modular and powerful UI for creating Stable Diffusion workflows. Node-based interface for complex image and video generation pipelines.",
    tags: ["gen-ai", "open-source", "image", "video"]
  }
];