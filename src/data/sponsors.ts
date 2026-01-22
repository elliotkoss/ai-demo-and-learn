export type Sponsor = {
  name: string;
  url: string;
  description: string;
  logo: string;
  logoHorizontal?: string;
  tier: 'featured' | 'community';
  featured?: boolean;
};

export const sponsors: Sponsor[] = [
  {
    name: "Synthetic",
    url: "https://synthetic.new",
    description: "Managed platform for running open-source language models in secure US and EU datacenters. Privacy-first infrastructure that never trains on your data—just paste a Hugging Face link and deploy any supported LLM.",
    logo: "/images/sponsors/synthetic/logo_with_text_bottom.jpg",
    logoHorizontal: "/images/sponsors/synthetic/logo_1200_300.png",
    tier: "featured",
    featured: true
  }
];
