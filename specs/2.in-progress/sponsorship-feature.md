# Sponsorship Feature Implementation Plan

## Overview

This spec outlines the implementation of sponsorship features for AI Demo & Learn, starting with our first sponsor: **Synthetic**.

**Goals:**
1. Showcase sponsors prominently on the homepage
2. Create a dedicated sponsors page explaining our sponsorship model
3. Add sponsors as featured tools with visual differentiation
4. Encourage potential sponsors to reach out

---

## Sponsor Information

### Synthetic (Founding Sponsor)

| Field | Value |
|-------|-------|
| **Name** | Synthetic |
| **URL** | https://synthetic.new |
| **Description** | Managed platform for running open-source language models in secure US and EU datacenters. Privacy-first infrastructure that never trains on your data—just paste a Hugging Face link and deploy any supported LLM. |
| **Tags** | `api`, `models`, `open-source`, `infrastructure` |
| **Tier** | Founding Sponsor |
| **Benefit** | *To be revealed at the January 29 event* |

---

## Available Assets

### Synthetic Logo Variants

| File | Format | Best Use |
|------|--------|----------|
| `logo_1200.png` | Square icon only | Small icons, featured tools card |
| `logo_1200_circle.png` | Square icon (circular crop ready) | Avatar-style displays |
| `logo_with_text_bottom.jpg` | Vertical (logo + text) | Sponsors page card |
| `logo_1200_300.png` | Horizontal banner (logo + text) | Homepage sponsor section |

**Logo Usage:**
- Homepage sponsor section: `logo_1200_300.png` (horizontal)
- Featured tools card: `logo_1200.png` (square icon)
- Sponsors page: `logo_with_text_bottom.jpg` (vertical with text)

---

## Implementation Phases

### Phase 1: Data Model Updates

#### 1.1 Update Resource Type (`src/data/resources.ts`)

Add sponsor-related fields to the `Resource` type:

```typescript
export type Resource = {
  name: string;
  url: string;
  description: string;
  deals?: { description: string; url?: string }[];
  tags?: string[];
  // New fields
  isSponsor?: boolean;        // Marks as sponsor
  sponsorLogo?: string;       // Path to sponsor logo (optional override)
};
```

#### 1.2 Create Sponsors Data (`src/data/sponsors.ts`)

Create dedicated sponsors data file:

```typescript
export type Sponsor = {
  name: string;
  url: string;
  description: string;
  logo: string;              // Path to logo (vertical/square)
  logoHorizontal?: string;   // Banner-style logo for homepage
  tier: 'founding' | 'featured' | 'community';
  featured?: boolean;        // Show on homepage
};

export const sponsors: Sponsor[] = [
  {
    name: "Synthetic",
    url: "https://synthetic.new",
    description: "Managed platform for running open-source language models in secure US and EU datacenters. Privacy-first infrastructure that never trains on your data—just paste a Hugging Face link and deploy any supported LLM.",
    logo: "/images/sponsors/synthetic/logo_with_text_bottom.jpg",
    logoHorizontal: "/images/sponsors/synthetic/logo_1200_300.png",
    tier: "founding",
    featured: true
  }
];
```

#### 1.3 Add Synthetic to Resources

Add to `src/data/resources.ts` (at the beginning to appear first):

```typescript
{
  name: "Synthetic",
  url: "https://synthetic.new",
  description: "Managed platform for running open-source language models in secure US and EU datacenters. Privacy-first infrastructure that never trains on your data—just paste a Hugging Face link and deploy any supported LLM.",
  tags: ["api", "models", "open-source", "infrastructure"],
  isSponsor: true
}
```

---

### Phase 2: Homepage Sponsor Section

#### 2.1 New Section Position

Insert sponsor section between **Hero** and **About** sections in `src/pages/Home.tsx`.

**Location in code:** After line 55 (end of Hero), before line 57 (About section).

#### 2.2 Design: Card-Based Section

Create a centered card with subtle styling that matches the site aesthetic.

```
┌─────────────────────────────────────────────────────────────┐
│                    py-8 bg-background/30                     │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  "Proudly Supported By"        [Founding Sponsor]   │    │
│  │                                                      │    │
│  │         [Synthetic Horizontal Logo - clickable]      │    │
│  │                                                      │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│            [View All Sponsors →] (link to /sponsors)         │
└─────────────────────────────────────────────────────────────┘
```

#### 2.3 Create Component

Create `src/components/SponsorBanner.tsx`:

```tsx
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { sponsors } from "@/data/sponsors";

const SponsorBanner = () => {
  const featuredSponsors = sponsors.filter(s => s.featured);

  if (featuredSponsors.length === 0) return null;

  return (
    <section className="py-8 bg-background/30">
      <div className="container mx-auto">
        <Card className="bg-gradient-card shadow-card max-w-2xl mx-auto">
          <CardContent className="py-6 px-8">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground font-medium">
                Proudly Supported By
              </p>
              <Badge variant="secondary" className="text-xs">
                Founding Sponsor
              </Badge>
            </div>

            <div className="flex justify-center">
              {featuredSponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src={sponsor.logoHorizontal || sponsor.logo}
                    alt={sponsor.name}
                    className="h-12 md:h-16 w-auto"
                  />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-4">
          <Link
            to="/sponsors"
            className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
          >
            Learn about sponsoring
            <ArrowRight className="h-3 w-3 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SponsorBanner;
```

---

### Phase 3: Sponsors Page

#### 3.1 New Route

- **Path:** `/sponsors`
- **Nav Position:** Left of Consulting (after Contribute)

#### 3.2 Page Structure (`src/pages/Sponsors.tsx`)

```
┌─────────────────────────────────────────────────────────────┐
│                       PageHeader                             │
│  "Our Sponsors"                                              │
│  "Companies and products supporting our community"           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  Current Sponsors Section                    │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  [Founding Sponsor Badge]                              │  │
│  │  [Logo - vertical with text]                           │  │
│  │  Synthetic                                             │  │
│  │  Autonomous accounting for software businesses...      │  │
│  │  [Visit Synthetic →]                                   │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                 About Our Community                          │
│                                                              │
│  We're a free community for AI learners. Every month, we    │
│  host public video sessions where we feature AI products    │
│  and provide hands-on demos. Our goal is to help people     │
│  learn by doing.                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                 What Sponsors Get                            │
│                                                              │
│  • Homepage featured sponsor section                         │
│  • Dedicated listing on sponsors page                        │
│  • Featured tool listing with "Sponsor" badge               │
│  • Exposure during monthly sessions (optional demo)          │
│  • Marketing to an AI-curious, hands-on audience            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                 What We Ask                                  │
│                                                              │
│  Our sponsors provide direct value to community members—    │
│  whether that's product access, usage credits, or other     │
│  perks that help people learn hands-on.                     │
│                                                              │
│  • You don't have to demo your product to sponsor           │
│  • You don't have to sponsor to demo                        │
│  • We're flexible and focused on mutual benefit             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                 Become a Sponsor CTA                         │
│                                                              │
│  Interested in becoming a sponsor? We'd love to hear from   │
│  you.                                                        │
│                                                              │
│  [Contact Us] (links to /consulting)                        │
│  [Join Discord] (links to Discord)                          │
│                                                              │
│  Reach out to Elliot or Rob to discuss sponsorship.         │
└─────────────────────────────────────────────────────────────┘
```

#### 3.3 Contact Options

- **Primary:** Link to `/consulting` page (uses existing ConsultingForm)
- **Alternative:** Discord link with note to reach Elliot or Rob

---

### Phase 4: Featured Tools Integration

#### 4.1 Update ResourceCard Component

Modify `src/components/ResourceCard.tsx` to show sponsor badge:

```tsx
import { Star } from "lucide-react";

// In CardHeader, after the title link:
{resource.isSponsor && (
  <Badge className="text-xs bg-primary/20 text-primary border-primary/30 ml-2">
    <Star className="h-3 w-3 mr-1 fill-current" />
    Sponsor
  </Badge>
)}
```

#### 4.2 Featured Tool Prioritization

Update `src/pages/Home.tsx` to show sponsors first in featured tools:

```typescript
// Current
const featuredResources = resources.slice(0, 4);

// Updated: Sponsors first, then others
const featuredResources = [
  ...resources.filter(r => r.isSponsor),
  ...resources.filter(r => !r.isSponsor)
].slice(0, 4);
```

---

### Phase 5: Navigation Update

#### 5.1 Add Sponsors to Nav

Update `src/components/Header.tsx` navItems (Sponsors left of Consulting):

```typescript
const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/contribute", label: "Contribute" },
  { href: "/sponsors", label: "Sponsors" },  // NEW - left of Consulting
  { href: "/consulting", label: "Consulting" }
];
```

#### 5.2 Add Route to App.tsx

```typescript
import Sponsors from "@/pages/Sponsors";

// In Routes:
<Route path="/sponsors" element={<Sponsors />} />
```

---

## File Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `src/data/resources.ts` | Modify | Add `isSponsor` field to type, add Synthetic entry |
| `src/data/sponsors.ts` | Create | New sponsor data file with Sponsor type |
| `src/components/SponsorBanner.tsx` | Create | Homepage sponsor section component |
| `src/components/ResourceCard.tsx` | Modify | Add sponsor badge display |
| `src/pages/Home.tsx` | Modify | Import SponsorBanner, add section, update featured logic |
| `src/pages/Sponsors.tsx` | Create | New sponsors page |
| `src/components/Header.tsx` | Modify | Add "Sponsors" nav item |
| `src/App.tsx` | Modify | Add /sponsors route |

---

## Implementation Order

1. **Data layer** - Create `sponsors.ts`, update `resources.ts` with type and Synthetic entry
2. **ResourceCard** - Add sponsor badge indicator
3. **SponsorBanner** - Create homepage component
4. **Home.tsx** - Add sponsor section, update featured logic
5. **Sponsors.tsx** - Create full sponsors page
6. **Navigation** - Add to Header.tsx and App.tsx
7. **Polish** - Responsive testing, copy refinement

---

## Copy Drafts

### Homepage Sponsor Section
- Label: "Proudly Supported By"
- Badge: "Founding Sponsor"
- Link: "Learn about sponsoring →"

### Sponsors Page

**Page Title:** "Our Sponsors"

**Page Description:** "Companies and products supporting our community"

**About Section:**
> We're a free community for AI learners. Every month, we host public video sessions where we feature AI products and provide hands-on demos. Our goal is to help people learn by doing.

**What Sponsors Get:**
> - Homepage featured sponsor section
> - Dedicated listing on sponsors page
> - Featured tool listing with "Sponsor" badge
> - Exposure during monthly sessions (optional demo)
> - Marketing to an AI-curious, hands-on audience

**What We Ask:**
> Our sponsors provide direct value to community members—whether that's product access, usage credits, or other perks that help people learn hands-on.
>
> - You don't have to demo your product to sponsor
> - You don't have to sponsor to demo
> - We're flexible and focused on mutual benefit

**CTA:**
> Interested in becoming a sponsor? We'd love to hear from you.
>
> Reach out to Elliot or Rob via our contact form or Discord.

---

## Design Decisions (Finalized)

| Decision | Choice |
|----------|--------|
| Nav position | Left of Consulting |
| Sponsor indicator | Badge with star icon |
| Homepage section | Card-based, centered |
| Contact method | /consulting form + Discord |
| Benefit disclosure | Hidden (Jan 29 event reveal) |

---

## Notes

- Synthetic's specific benefit to the community is intentionally not shown on the site—it will be revealed at the January 29 event
- Potential sponsors should contact via the consulting form or reach out to Elliot or Rob on Discord
- The sponsor badge uses the primary color to stand out while remaining consistent with site styling
