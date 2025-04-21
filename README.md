# Norvalt Automation Agency Landing Page

This repository is your starting point for building the Norvalt Automation Agency landing page. Follow the guidelines and best practices below to scaffold, develop, and deploy your site efficiently.

---

## 📝 Overview

Norvalt helps SMBs automate manual tasks using AI-driven solutions. This landing page will showcase Norvalt’s services, case studies, and brand messaging.

Key sections:
- **Home**: Hero, benefits, services preview
- **About**: Mission, vision, team
- **Services**: AI chat & voice agents, workflow automation, web/app development, AI training
- **Case Studies**: Examples with before/after metrics
- **Contact**: Inquiry form + scheduling
- **Blog** (Optional)

---

## 🚀 Getting Started

### Prerequisites

- VS Code with [Cursor AI extension](https://cursor.so/)
- Node.js v16+ / npm or Yarn
- GitHub account for repo and deployments

### Install

```bash
# Clone the repo
git clone git@github.com:<your-org>/norvalt-landing.git
cd norvalt-landing

# Initialize project with Cursor AI
# In VS Code, open Command Palette (Ctrl+Shift+P) → Cursor: Start a new project → Choose Next.js + Tailwind CSS starter
```

---

## 📐 Project Structure

```text
norvalt-landing/
├── components/       # Reusable React components
├── layouts/          # Global Layout and page wrappers
├── pages/            # Next.js page routes
├── public/           # Static assets (images, fonts)
├── styles/           # Tailwind config and global CSS
├── scripts/          # Automation scripts (e.g., lint, format)
├── README.md         # This file
└── package.json      # Dependencies & scripts
```

---

## 🤖 Cursor AI Workflow

1. **Scaffold**  
   ```
   # In VS Code's integrated terminal, prompt Cursor:
   Generate a Next.js + Tailwind CSS starter for Norvalt Automation Agency landing page.
   ```
2. **Generate Components**  
   - Hero:  
     ```
     Prompt: Create a responsive HeroSection with title, subtitle, and CTA button using Tailwind CSS.
     ```
   - Services Grid:  
     ```
     Prompt: Build a ServicesGrid component with four cards: AI Chat, Voice Agents, Workflow Automation, Web & App Development.
     ```

3. **Use Recipes**  
   - Save your favorite prompts (HeroSection, Footer, ContactForm) in Cursor’s Recipes panel for reuse.
   - Invoke recipes with `@recipes/<name>` in comments or prompt lines.

4. **Git & PRs**  
   - Use Cursor’s Git panel to stage, commit, and draft PRs:  
     ```
     # Commit message prompt:
     Prompt: Write a commit message for adding the HeroSection component.
     ```

5. **Testing & QA**  
   - **Unit tests**:  
     ```
     Prompt: Scaffold a Jest + RTL test for HeroSection ensuring the title and button render.
     ```
   - **Accessibility**:  
     ```
     Prompt: Inject Axe-core accessibility checks for ServicesGrid.
     ```

6. **Deployment**  
   - Push your branch to GitHub.  
   - Preview deploy via Vercel integration.  
   - Use:  
     ```
     Prompt: Configure Vercel environment variables and preview settings.
     ```

---

## 📈 Performance & SEO

- **Lighthouse**: Run `npx lighthouse` and prompt Cursor:  
  ```
  Prompt: Analyze Lighthouse report and suggest performance improvements.
  ```
- **SEO**: Use Next.js `next/head` for meta tags and JSON-LD.  
  ```
  Prompt: Generate JSON-LD schema for Organization and ContactPage.
  ```

---

## 🤝 Contributing

1. Fork this repo and create a feature branch.
2. Use Cursor AI to scaffold and review code.
3. Open a PR with AI-generated changelog summary.  
   ```
   Prompt: Summarize changes in this branch for the changelog.
   ```
4. Ensure all tests and accessibility checks pass.

---

By following this README and leveraging Cursor AI’s powerful prompts, you’ll accelerate development and maintain consistent quality across the Norvalt landing page. Let’s build something great!
