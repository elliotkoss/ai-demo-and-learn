export type Video = {
  id: string;
  title: string;
  youtubeUrl: string;
  thumbnailUrl?: string;
  eventId?: string;
  date: string;
  description: string;
  speaker?: string;
  speakerLinkedin?: string;
  tags?: string[];
};

export const videos: Video[] = [
  {
    id: "apr-2026-mastering-claude",
    title: "Mastering Claude: From Basics to Advanced Workflows",
    youtubeUrl: "https://youtu.be/xlHcNtp8g28",
    eventId: "apr-2026",
    date: "April 16, 2026",
    description: "Get a comprehensive tour of the entire Claude ecosystem with Dr. Robert Voss. This session takes you step-by-step through Claude, Claude Code, and Claude Cowork, with hands-on demonstrations and practical workflows. Covers both free and paid versions, so you can follow along regardless of where you are in your Claude journey.",
    speaker: "Dr. Robert Voss",
    speakerLinkedin: "https://www.linkedin.com/in/ai-robvoss",
    tags: ["demo", "claude", "workshop"]
  },
  {
    id: "mar-2026-openclaw",
    title: "Setup OpenClaw on a Cloud Server",
    youtubeUrl: "https://youtu.be/CVlIcodlV7I",
    eventId: "mar-2026",
    date: "March 26, 2026",
    description: "Learn what OpenClaw is, how to spin up a server for it, connect it to chat apps and integrations, and build agent workflows on your own infrastructure. Simon Bergeron walks through setting up OpenClaw, an open-source personal AI assistant, on a Digital Ocean Droplet for 24/7 cloud hosting.",
    speaker: "Simon Bergeron",
    speakerLinkedin: "https://www.linkedin.com/in/slbergeron/",
    tags: ["demo", "open-source", "self-hosted"]
  },
  {
    id: "feb-2026-build-your-own-gpt",
    title: "Build Your Own GPT: A Live Hands-On Workshop",
    youtubeUrl: "https://youtu.be/IUMPNMVF-iU",
    eventId: "feb-2026",
    date: "February 26, 2026",
    description: "Rob Strobel walks through designing and building a Custom GPT from scratch inside ChatGPT. Learn the thinking behind every decision and leave with a working GPT and a clear framework for systemizing your own AI workflows.",
    speaker: "Rob Strobel",
    speakerLinkedin: "https://www.linkedin.com/in/rstrobel/",
    tags: ["demo", "chatgpt", "workshop"]
  },
  {
    id: "jan-2026-code-puppy",
    title: "Code Puppy Live Demo",
    youtubeUrl: "https://youtu.be/D2p_nh5wN0U",
    eventId: "jan-2026",
    date: "January 29, 2026",
    description: "Discover Code Puppy, a powerful open-source alternative to Claude Code that's been adopted by companies including Walmart. Michael Pfaffenberger demos this AI-based terminal tool that supports multiple models and can transform your development workflow.",
    speaker: "Michael Pfaffenberger",
    speakerLinkedin: "https://www.linkedin.com/in/michael-pfaffenberger-a3b23657/",
    tags: ["demo", "devtools", "open-source"]
  }
];
