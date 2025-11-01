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
    url: "https://comfy.org",
    description: "Modular and powerful UI for creating Stable Diffusion workflows. Node-based interface for complex image and video generation pipelines.",
    tags: ["gen-ai", "open-source", "image", "video"]
  },
  {
    name: "n8n",
    url: "https://n8n.io/",
    description: "Open-source workflow automation platform with deep AI tooling. Build multi-step agents, integrate 500+ apps, and self-host end‑to‑end including AI models.",
    tags: ["automation", "agents", "open-source", "workflows"]
  },
  {
    name: "ElevenLabs",
    url: "https://elevenlabs.io/",
    description: "State-of-the-art AI audio platform: expressive Text‑to‑Speech, Dubbing, Voice Cloning, Speech‑to‑Text, and low‑latency voice agents for production apps.",
    tags: ["audio", "tts", "dubbing", "voice-cloning"]
  },
  {
    name: "HeyGen",
    url: "https://app.heygen.com/",
    description: "Generative video platform for realistic avatars, lip‑sync, and multilingual video creation—great for demos, training, and marketing content.",
    tags: ["video", "avatars", "multilingual"]
  },
  {
    name: "Sora",
    url: "https://sora.chatgpt.com/",
    description: "Cutting‑edge text‑to‑video model capable of generating high‑fidelity, coherent videos from prompts; useful for concept visualization and prototyping.",
    tags: ["video", "gen-ai", "models"]
  },
  {
    name: "LM Studio",
    url: "https://lmstudio.ai/",
    description: "Local LLM desktop app to run, fine‑tune, and serve open models on your machine with a simple UI and compatible server APIs.",
    tags: ["local-llm", "devtools", "models"]
  }
];