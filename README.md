# Emmanuel Charley Portfolio

![Deploy to GitHub Pages](https://github.com/Tshikwetamakole/emmanuel-charley-portfolio/actions/workflows/deploy.yml/badge.svg)

A sleek, animated, and modern developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

👉 **Live Site:** [https://tshikwetamakole.github.io/emmanuel-charley-portfolio](https://tshikwetamakole.github.io/emmanuel-charley-portfolio)

![Portfolio Preview](https://raw.githubusercontent.com/Tshikwetamakole/emmanuel-charley-portfolio/main/src/assets/portfolio-preview.png)

---

## 🚀 Features

- ⚡ Lightning-fast Vite + React setup
- 🎨 Custom UI/UX design with Tailwind CSS
- 💫 Smooth animations using Framer Motion
- 🌗 Dark mode (toggle supported)
- ✍️ Blog powered by Markdown + React Markdown
- 📬 Contact form with EmailJS integration
- 📱 Fully responsive for all devices
- 💬 WhatsApp contact shortcut

---

## 📁 Project Structure

src/
├── assets/ # Images & media
├── components/ # Reusable components (Navbar, etc.)
├── pages/ # Section components (Hero, About, Blog, etc.)
├── posts/ # Markdown blog content
├── App.tsx # Main app layout
├── main.tsx # React entry point
├── index.css # Tailwind styles

---

## 🔧 Tech Stack

- **React** + **TypeScript**
- **Vite** for bundling
- **Tailwind CSS** for styling
- **Framer Motion** for animation
- **EmailJS** for contact form handling
- **React Router DOM** (used optionally)
- **React Markdown** + **Gray Matter** for blog rendering
- **gh-pages** for deployment

---

## 🚀 Deployment

This portfolio is automatically deployed to **GitHub Pages** via **GitHub Actions** on every push to `main`.

> You can view the deployed version at:  
> [https://tshikwetamakole.github.io/emmanuel-charley-portfolio](https://tshikwetamakole.github.io/emmanuel-charley-portfolio)

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Run in dev mode
npm run dev

# Build for production
npm run build

# Deploy manually (optional)
npm run deploy
---

## 📁 Project Declaration – Emmanuel Charley Portfolio

### 🎯 Purpose
This project is a **personal developer portfolio** website for Emmanuel "Charley" Raluswinga, designed to:
- Present skills, projects, services, and blog content.
- Offer downloadable and viewable resume access.
- Enable contact via Email, WhatsApp, and Facebook.
- Serve as a professional online presence for tech opportunities in Africa and beyond.

### ⚙️ Tech Stack
- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS 3 + custom colors
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Markdown Blog:** React Markdown + Gray Matter
- **Contact Form:** Formspree + honeypot + webhook logging
- **Deployment:** GitHub Pages via GitHub Actions
- **Additional Tools:** EmailJS (optional), Lucide Icons, React Icons, Typewriter animation

### 🧩 Folder Structure
📁 src/
│   ├── assets/             # Images, background, profile
│   ├── components/         # Navbar, FloatingWhatsApp
│   ├── pages/              # Hero.tsx, About.tsx, Blog.tsx, Post.tsx, Contact.tsx, etc.
│   ├── posts/              # Markdown articles (*.md)
│   ├── App.tsx             # Main app layout with routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Tailwind styles
📁 public/
│   ├── resume.pdf          # Resume for view/download
│   └── profile.jpg         # Profile picture
### 🌍 Live Site
> **URL:** [https://tshikwetamakole.github.io/emmanuel-charley-portfolio](https://tshikwetamakole.github.io/emmanuel-charley-portfolio)

### 📝 Blog Setup
- Blog posts stored in `src/posts/*.md`
- Posts are loaded using `import.meta.glob` via `vite.config.ts`
- Dynamic routing via `/posts/:slug` handled in `Post.tsx`
- Markdown frontmatter (title, date, excerpt) is parsed with `gray-matter`

### 📬 Contact Form
- **Formspree endpoint:** `https://formspree.io/f/xnnvezby`
- **Spam Protection:** Honeypot input + webhook log to Webhook.site
- **Webhook log URL:** `https://webhook.site/c0b50812-dd37-49a0-8a83-7329d48ac561`
- **Extras:** Floating WhatsApp button, resume viewer and downloader

### 🧪 Local Development

```bash
npm install       # Install dependencies
npm run dev       # Start dev server
npm run build     # Build for production
npm run deploy    # Deploy to GitHub Pages
### 🏗 Deployment
- **Automated with GitHub Actions**
- `homepage` field set in `package.json`
- Deploys to GitHub Pages on `main` branch push

### 📚 Notable Content
- Featured article: [Introducing AI in African Schools](https://tshikwetamakole.github.io/emmanuel-charley-portfolio/posts/introducing-ai-in-african-schools)
- Resume: Included in `/public/resume.pdf`, downloadable and viewable
