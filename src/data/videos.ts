export type Video = {
  id: string;
  title: string;
  youtubeUrl: string;
  thumbnailUrl?: string;
  eventId?: string;
  date: string;
  description: string;
  speaker?: string;
  tags?: string[];
};

export const videos: Video[] = [
  {
    id: "jan-2026-code-puppy",
    title: "Code Puppy Live Demo",
    youtubeUrl: "https://youtu.be/D2p_nh5wN0U",
    eventId: "jan-2026",
    date: "January 29, 2026",
    description: "Discover Code Puppy, a powerful open-source alternative to Claude Code that's been adopted by companies including Walmart. Michael Pfaffenberger demos this AI-based terminal tool that supports multiple models and can transform your development workflow.",
    speaker: "Michael Pfaffenberger",
    tags: ["demo", "devtools", "open-source"]
  },
  {
    id: "feb-2026-build-your-own-gpt",
    title: "Build Your Own GPT: A Live Hands-On Workshop",
    youtubeUrl: "https://youtu.be/IUMPNMVF-iU",
    eventId: "feb-2026",
    date: "February 26, 2026",
    description: "Rob Strobel walks through designing and building a Custom GPT from scratch inside ChatGPT. Learn the thinking behind every decision and leave with a working GPT and a clear framework for systemizing your own AI workflows.",
    speaker: "Rob Strobel",
    tags: ["demo", "chatgpt", "workshop"]
  }
];
