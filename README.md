# Premium Developer Portfolio — Chirag Verma

A high-fidelity developer portfolio built on Next.js 15+ (App Router), React 19, and Tailwind CSS v4. The design system represents an aesthetic blend of **Apple** (generous spacing, precise layout grid), **Linear** (dark theme, interactive command menu, keyboard accessibility), and **Stripe** (liquid glassmorphism cards, ambient glowing radial orbs, custom silver/purple gradients).

---

## 🛠️ Architecture & Tech Stack

- **Framework**: Next.js 15+ (App Router, Turbopack, Server-Side Prerendering)
- **UI & Styling**: Tailwind CSS v4, Lucide Icons, Custom CSS gradients and keyframe transitions
- **Aesthetics**: Glassmorphism cards, metric-driven Bento grids, dot-connected experience timeline
- **Accessibility & SEO**: Custom root error boundaries, fallback system fonts stack, structured OpenGraph metadata, and keyboard navigation supports
- **Developer Environment**: Fully containerized using Docker and Docker Compose (Node 22-alpine base)

---

## 🚀 Getting Started (Using Docker)

To run the application locally without requiring a local Node.js or package manager setup, use Docker. The Docker container is pre-configured with Node 22 and automatically mounts your local workspace for hot-reloading development.

### 1. Start the Dev Server (Detached Mode - Recommended)
Run the following command in your terminal to build the image, install dependencies, and run the container in the background:
```bash
docker compose up --build -d
```
*The container will boot in the background and configure the Next.js Turbopack compiler.*

### 2. Start the Dev Server (Attached Mode)
If you wish to view live console logs directly in your terminal, run without the `-d` flag:
```bash
docker compose up --build
```
*Note: Press `Ctrl+C` to gracefully stop the container when running in this mode.*

---

## 🔌 Port Mapping & Browsing the Site

The `docker-compose.yml` configures a port redirect between the container and your local machine:
- **Container Port**: `3000` (where Next.js dev server listens inside the container)
- **Host Port**: `4000` (where the service is exposed on your computer)

### Open in Browser
To view the running portfolio website, open your browser and navigate to:
👉 **[http://localhost:4000](http://localhost:4000)**

---

## 🧹 Other Development Commands

All package installs and compilation steps are run inside the container to maintain a consistent sandbox environment.

### Run Production Build Check
To compile the application, run TypeScript validation, and export optimized static pages:
```bash
docker compose exec -e NODE_ENV=production app npm run build
```

### Install New Dependencies
To install additional npm packages directly inside the container volume:
```bash
docker compose exec app npm install <package-name> --no-audit --no-fund
```

### Stop Container Services
To stop the background services and release port `4000`:
```bash
docker compose down
```

---

## 📂 Project Structure

```
src/
  app/
    about/                → Experience timeline, academic metrics, and credentials
    contact/              → Contact page layout (Server Component wrapper)
    projects/             → Rich technical case studies and code archives
    layout.tsx            → Page outline, SEO tags, global canvas background
    page.tsx              → Metric-driven bento dashboard & technical skills tabs
    global-error.tsx      → Core error boundary catcher
    not-found.tsx         → Premium typographic 404 page
    globals.css           → Theme colors, glass-card rules, animation keyframes
  components/
    Navbar.tsx            → Sticky glassmorphism header & Command Menu trigger hook
    Footer.tsx            → Copyright notice and live IST timezone clock
    Hero.tsx              → Staggered typographic reveals and action copy triggers
    ProjectCard.tsx       → Bento-card layout with badges and Github handles
    Skills.tsx            → Interactive capabilities switcher
    CommandMenu.tsx       → Keyboard-navigable Cmd+K command palette
    ContactForm.tsx       → Decoupled client contact form handlers
    Reveal.tsx            → Pure CSS hardware-accelerated scroll entrance
  data/
    project.ts            → Rich data structure for all developer achievements
    skills.ts             → Categorized technical skill sets
  type/
    project.ts            → Typings for project models
```
