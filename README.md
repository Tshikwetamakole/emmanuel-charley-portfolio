<div align="center">

# 🌟 Emmanuel Charley Portfolio

### A Modern Developer Portfolio Built with React, TypeScript & Tailwind CSS

[![Deploy to GitHub Pages](https://github.com/Tshikwetamakole/emmanuel-charley-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Tshikwetamakole/emmanuel-charley-portfolio/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[**🌐 Live Demo**](https://charleyraluswinga.space) • [**📝 Blog**](https://charleyraluswinga.space/#blog) • [**📧 Contact**](https://charleyraluswinga.space/#contact)

![Portfolio Preview](https://raw.githubusercontent.com/Tshikwetamakole/emmanuel-charley-portfolio/main/src/assets/portfolio-preview.png)

</div>

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🏗️ Project Structure](#️-project-structure)
- [🔧 Tech Stack](#-tech-stack)
- [📝 Adding Blog Posts](#-adding-blog-posts)
- [🌍 Deployment](#-deployment)
- [🎨 Customization](#-customization)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## ✨ Features

<table>
  <tr>
    <td>⚡</td>
    <td><strong>Lightning Fast</strong><br/>Built with Vite for optimal performance and instant HMR</td>
  </tr>
  <tr>
    <td>🎨</td>
    <td><strong>Modern UI/UX</strong><br/>Sleek design with Tailwind CSS and smooth animations</td>
  </tr>
  <tr>
    <td>💫</td>
    <td><strong>Framer Motion</strong><br/>Beautiful page transitions and interactive animations</td>
  </tr>
  <tr>
    <td>🌗</td>
    <td><strong>Dark Mode</strong><br/>Toggle between light and dark themes seamlessly</td>
  </tr>
  <tr>
    <td>✍️</td>
    <td><strong>Markdown Blog</strong><br/>Write posts in Markdown with frontmatter support</td>
  </tr>
  <tr>
    <td>📬</td>
    <td><strong>Contact Form</strong><br/>Formspree integration with spam protection</td>
  </tr>
  <tr>
    <td>📱</td>
    <td><strong>Fully Responsive</strong><br/>Optimized for all screen sizes and devices</td>
  </tr>
  <tr>
    <td>🔍</td>
    <td><strong>SEO Optimized</strong><br/>Meta tags, OG images, and sitemap generation</td>
  </tr>
  <tr>
    <td>♿</td>
    <td><strong>Accessible</strong><br/>WCAG compliant with semantic HTML</td>
  </tr>
  <tr>
    <td>💬</td>
    <td><strong>WhatsApp Integration</strong><br/>Floating button for quick contact</td>
  </tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 16.x or higher
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Tshikwetamakole/emmanuel-charley-portfolio.git

# Navigate to project directory
cd emmanuel-charley-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## 🏗️ Project Structure

```
emmanuel-charley-portfolio/
├── 📁 public/              # Static assets
│   ├── resume.pdf          # Downloadable resume
│   ├── profile.jpg         # Profile picture
│   ├── CNAME              # Custom domain configuration
│   └── og/                # Open Graph images
├── 📁 src/
│   ├── 📁 assets/          # Images and media files
│   ├── 📁 components/      # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   └── ...
│   ├── 📁 pages/           # Page components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── Post.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── 📁 posts/           # Markdown blog posts
│   │   ├── template.md
│   │   └── *.md
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles (Tailwind)
├── 📁 scripts/             # Build and optimization scripts
│   ├── generate-og.js      # Generate OG images
│   ├── optimize-images.js  # Image optimization
│   └── generate-sitemap.js # Sitemap generation
├── 📁 server/              # Optional backend server
├── vite.config.mts         # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Project dependencies
```

---

## 🔧 Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| [React](https://reactjs.org/) | 18.2.0 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.0.0 | Type safety |
| [Vite](https://vitejs.dev/) | 7.0.0 | Build tool |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.17 | Styling |

### Key Libraries

- **🎭 Framer Motion** - Animation library
- **🎨 Tailwind Typography** - Beautiful typography plugin
- **📝 React Markdown** - Markdown rendering
- **🎯 Gray Matter** - Frontmatter parsing
- **🧭 React Router DOM** - Client-side routing
- **✨ Lucide React** - Icon library
- **⌨️ React Simple Typewriter** - Typewriter effect

### DevOps & Deployment

- **GitHub Actions** - CI/CD automation
- **GitHub Pages** - Static site hosting
- **Sharp** - Image optimization
- **Vitest** - Unit testing framework

---

## 📝 Adding Blog Posts

Creating a new blog post is simple and requires no coding:

### Step-by-Step Guide

1. **Navigate to Posts Directory**
   ```bash
   cd src/posts/
   ```

2. **Duplicate the Template**
   ```bash
   cp template.md my-new-post.md
   ```

3. **Edit Frontmatter**
   ```markdown
   ---
   title: "Your Awesome Post Title"
   date: "2024-01-15"
   excerpt: "A brief one-sentence summary of your post"
   author: "Your Name"
   tags: ["react", "typescript", "tutorial"]
   ---
   ```

4. **Write Your Content**
   
   Use Markdown syntax below the frontmatter:
   ```markdown
   ## Your First Heading
   
   Your content here...
   
   ### Subheading
   
   More content with **bold** and *italic* text.
   
   ```code blocks```
   ```

5. **Commit and Push**
   ```bash
   git add src/posts/my-new-post.md
   git commit -m "Add new blog post: My New Post"
   git push
   ```

Your post will automatically appear on the blog page! 🎉

### Frontmatter Options

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ Yes | Post title displayed on blog |
| `date` | ✅ Yes | Publication date (YYYY-MM-DD) |
| `excerpt` | ✅ Yes | Short summary for post list |
| `author` | ❌ No | Author name (defaults to main author) |
| `tags` | ❌ No | Array of tags for categorization |
| `image` | ❌ No | Featured image URL |

---

## 🌍 Deployment

This portfolio uses **automated deployment** to GitHub Pages via GitHub Actions.

### Automatic Deployment

Every push to the `main` branch triggers:
1. 🖼️ Image optimization
2. 🎨 OG image generation
3. 🗺️ Sitemap creation
4. 🏗️ Production build
5. 🚀 Deployment to GitHub Pages

### Custom Domain Setup

#### Using `charleyraluswinga.space`

1. **CNAME File** (Already configured)
   
   The `public/CNAME` file contains: `charleyraluswinga.space`

2. **DNS Configuration**
   
   At your domain registrar, add:
   
   **Option A: CNAME Record (Recommended)**
   ```
   Type: CNAME
   Host: @ (or www)
   Value: Tshikwetamakole.github.io
   TTL: 3600
   ```
   
   **Option B: A Records (For Apex Domain)**
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   TTL: 3600
   ```

3. **Enable HTTPS**
   
   - Go to repository **Settings** → **Pages**
   - Ensure custom domain is set to `charleyraluswinga.space`
   - Enable "Enforce HTTPS" ✅

4. **Verify Deployment**
   ```bash
   # Check DNS propagation
   dig +short charleyraluswinga.space
   
   # Test HTTPS
   curl -I https://charleyraluswinga.space
   ```

#### Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 Error | Verify CNAME file has no extra whitespace |
| DNS not resolving | Wait 24-48 hours for full propagation |
| HTTPS not working | Check GitHub Pages settings for HTTPS enforcement |
| Custom domain not showing | Confirm DNS records point to correct GitHub IPs |

---

## 🎨 Customization

### Color Scheme

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
        accent: '#your-color',
      }
    }
  }
}
```

### Personal Information

Update your details in:
- `src/pages/Hero.tsx` - Name, title, social links
- `src/pages/About.tsx` - Bio, skills, experience
- `src/pages/Contact.tsx` - Contact information
- `public/resume.pdf` - Replace with your resume

### Formspree Contact Form

Replace the endpoint in `src/pages/Contact.tsx`:
```typescript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

### Analytics (Optional)

Add Google Analytics in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- ✅ Follow TypeScript best practices
- ✅ Use ESLint and Prettier
- ✅ Write meaningful commit messages
- ✅ Test your changes locally
- ✅ Update documentation as needed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

---

## 👨‍💻 Author

<div align="center">

### **Emmanuel Charley Raluswinga**

[![GitHub](https://img.shields.io/badge/GitHub-Tshikwetamakole-181717?logo=github)](https://github.com/Tshikwetamakole)
[![Email](https://img.shields.io/badge/Email-victorraluswinga@gmail.com-EA4335?logo=gmail&logoColor=white)](mailto:victorraluswinga@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?logo=linkedin)](https://www.linkedin.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF6B6B?logo=googlechrome&logoColor=white)](https://charleyraluswinga.space)

*Full-stack developer passionate about creating impactful web experiences*

</div>

---

## 🌟 Acknowledgments

- **Design Inspiration**: Modern portfolio trends
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Hosting**: [GitHub Pages](https://pages.github.com/)

---

## 📈 Project Stats

![GitHub last commit](https://img.shields.io/github/last-commit/Tshikwetamakole/emmanuel-charley-portfolio)
![GitHub issues](https://img.shields.io/github/issues/Tshikwetamakole/emmanuel-charley-portfolio)
![GitHub stars](https://img.shields.io/github/stars/Tshikwetamakole/emmanuel-charley-portfolio)
![GitHub forks](https://img.shields.io/github/forks/Tshikwetamakole/emmanuel-charley-portfolio)

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

**Made with ❤️ by Emmanuel Charley Raluswinga**

</div>
