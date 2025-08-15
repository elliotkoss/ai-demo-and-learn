# AI Demo & Learn Community Website

A modern, community-driven website for the AI Demo & Learn community. Built with React, TypeScript, and TailwindCSS for a beautiful, responsive experience.

## 🚀 Quick Start with Docker

To make setup fast and painless, this project includes a pre-configured `Dockerfile` so you can spin up a local development environment with hot reload support.

---

### 🐳 Prerequisites

Make sure you have Docker installed and running on your machine.  
If not, ask ChatGPT, Claude, Perplexity, or your favorite IDE how to install it.

Also, navigate to the project directory.

---

### ⚙️ 1. Build the Docker Image

```bash
docker build -t react-app .
```

---

### 🔁 2. Run the Docker Container (with Hot Reloading)

**macOS/Linux:**
```bash
docker run --rm -p 8080:8080 -v $(pwd):/app react-app
```

**Windows (cmd):**
```bash
docker run --rm -p 8080:8080 -v %cd%:/app react-app
```

**Windows (PowerShell):**
```bash
docker run --rm -p 8080:8080 -v ${PWD}:/app react-app
```

This command:
- Enables page reloading when you change files
- Automatically installs dependencies
- Mounts your local project for live editing
- Cleans up the container when you exit

> 💡 It may take a moment to start on the first run — it's doing some work to make your life easier.

---

### 🌐 3. Open the Site

Visit: [http://localhost:8080](http://localhost:8080)

---

### 🛑 4. Stop the Server

To shut down the app and remove the container, press:

```
Ctrl + C
```


## Quick Start without Docker

If you use Docker, you can ignore all of this!

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/elliotkoss/ai-demo-and-learn.git

# Navigate to the project directory
cd ai-demo-and-learn

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:8080`

## 🏗️ Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 🚀 Deployment

This is a fully static site that can be deployed to any static hosting service:

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite build settings
3. Deploy with default settings

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### GitHub Pages
1. Enable GitHub Pages in your repository settings
2. Use GitHub Actions for automatic deployment
3. The site will be available at `https://yourusername.github.io/ai-demo-and-learn`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, cards, etc.)
│   ├── Header.tsx      # Site navigation
│   ├── Footer.tsx      # Site footer
│   └── ...
├── data/               # Static data files
│   ├── projects.ts     # Community projects
│   └── resources.ts    # AI tools and resources
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── Projects.tsx    # Projects showcase
│   ├── Resources.tsx   # AI resources
│   ├── Join.tsx        # Community info
│   └── Consulting.tsx  # Consulting services
├── config.ts           # Site configuration
└── ...
```

## 🤝 How to Contribute

We welcome contributions from community members! Here's how you can help:

### Adding Your Project

1. **Fork the repository** on GitHub
2. **Edit** `src/data/projects.ts`
3. **Add your project** following this format:

```typescript
{
  title: "Your Project Name",
  creator: "Your Name",
  description: "A brief description of what your project does and its key features.",
  imageUrl: "/images/your-project-image.jpg", // Optional
  links: [
    { href: "https://github.com/yourusername/project", label: "GitHub" },
    { href: "https://your-demo.com", label: "Live Demo" }
  ],
  tags: ["gen-ai", "web", "your-tags"]
}
```

4. **Add an image** (optional): Place your project image in `public/images/`
5. **Submit a pull request** with your changes

### Adding AI Resources

1. **Edit** `src/data/resources.ts`
2. **Add your resource** following this format:

```typescript
{
  name: "Tool Name",
  url: "https://tool-website.com",
  description: "What this tool does and why it's useful for AI builders.",
  deals: [ // Optional
    {
      description: "Special discount or offer",
      url: "https://special-offer-link.com"
    }
  ],
  tags: ["category", "type"]
}
```

3. **Submit a pull request** with your changes

### Improving the Website

- **Bug fixes**: Found a bug? Submit an issue or fix it and send a PR
- **Feature requests**: Have an idea? Open an issue to discuss it
- **Design improvements**: Help make the site even more beautiful
- **Documentation**: Help improve this README or add inline documentation

### Pull Request Guidelines

1. **Keep changes focused**: One feature/fix per PR
2. **Write clear commit messages**: Describe what you changed and why
3. **Test your changes**: Make sure the site builds and works correctly
4. **Follow the existing code style**: Use the same patterns as existing code

## 🎨 Design System

The site uses a carefully crafted design system with:

- **Colors**: Purple-to-blue gradients with bright accents
- **Typography**: Modern sans-serif fonts with clear hierarchy
- **Components**: Consistent, reusable UI components
- **Dark Mode**: Automatic system preference detection
- **Responsive**: Mobile-first design that works on all devices

All styles are defined in `src/index.css` and `tailwind.config.ts` for consistency.

## 📝 Content Guidelines

When adding projects or resources:

- **Be descriptive**: Help others understand what makes your contribution valuable
- **Include links**: GitHub repos, live demos, documentation
- **Use appropriate tags**: Help with filtering and discovery
- **High-quality images**: Use clear, well-lit screenshots or graphics
- **Keep it current**: Remove or update outdated information

## 🔧 Technical Details

- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with custom design system
- **Routing**: React Router for client-side routing
- **Build Tool**: Vite for fast development and optimized builds
- **Icons**: Lucide React for consistent iconography
- **Accessibility**: WCAG compliant with semantic HTML

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♀️ Questions?

- **Join our Discord**: [https://discord.gg/uUvVnnkPur](https://discord.gg/uUvVnnkPur)
- **GitHub Issues**: For bug reports and feature requests
- **Email**: Contact elliot@teqcrew.com for other inquiries

---

Built with ❤️ by the AI Demo & Learn community