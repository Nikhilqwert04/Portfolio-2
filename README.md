
# Portfolio-2

[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, high-performance developer portfolio designed to showcase technical expertise, projects, and professional experience. Built with a focus on speed, clean aesthetics, and responsive design using the latest frontend tooling.

## 🚀 Overview

**Portfolio-2** is a refined personal website project that leverages the power of **Vite** and the cutting‑edge **Tailwind CSS v4**. It serves as a digital resume and project showcase, featuring a rich set of custom icons and a streamlined development workflow.

- **Target Audience:** Developers, Recruiters, and Tech Enthusiasts.
- **Status:** Active Development / v0.0.0.
- **New Projects Section:** Highlights the **Monopoly** and **HireAI** projects with screenshots, descriptions, and associated assets, providing concrete examples of my work.
- **About Me Section:** Introduced a dedicated About Me area with personal branding assets, giving visitors a quick insight into my background and interests.
- **🌐 Social Media Integration:** Added LinkedIn and LeetCode icons with direct links, allowing visitors to connect instantly.
- **🖋 Profile Text Styling:** Updated the profile text styling for clearer readability and a more modern look.
## ✨ Features

- **⚡ Blazing Fast Performance:** Optimized build process using Vite for near‑instant Hot Module Replacement (HMR).
- **🎨 Next‑Gen Styling:** Built with Tailwind CSS v4, utilizing the latest CSS‑first engine for modern UI components.
- **🎬 Streamlined Hero Animations:** Refactored and polished hero section animations for a more fluid and engaging initial load experience.
- **🔗 Optimized Navigation:** Updated navigation links and corrected section ID identifiers in `index.html` for seamless, error-free page navigation.
- **✨ Polished UI & Animations:** Features refined navbar aesthetics, smooth hover animations, and precise component positioning for an enhanced user experience.
- **📱 Fully Responsive:** Adaptive layouts that provide a seamless experience across mobile, tablet, and desktop devices.
- **🛤 Career Path Visualization:** Refined layout for showcasing professional milestones and educational background with improved spacing and alignment.
- **📦 Asset‑Rich:** Includes a comprehensive library of technology icons (Java, Python, MongoDB, Next.js, Socket.io, etc.) for visual skill representation.
- **🛠 Minimalist Architecture:** Clean directory structure designed for easy maintenance and scalability.
- **🗂 Projects Showcase:** Dedicated Projects section featuring the Monopoly and HireAI projects, complete with screenshots and tech stack details.
- **👤 About Me Section:** Personal introduction area with custom branding assets, enhancing the portfolio’s narrative.
- **📞 Dedicated Contact Section:** A newly integrated contact area featuring social media links with custom assets for Instagram, Twitter, LinkedIn, and LeetCode to improve connectivity.
- **🖋 Updated Profile Text Styling:** Refined typography and spacing for the profile section, delivering a cleaner visual hierarchy.
## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Vite** | Frontend Tooling & Build Pipeline |
| **Tailwind CSS v4** | Utility-first CSS Framework |
| **HTML5 / CSS3** | Core Structure and Styling |
| **JavaScript (ESM)** | Client-side Logic |

## 📂 Architecture

The project follows a standard Vite structure optimized for static asset management:

```text
├── public/                # Static assets (Icons, Logos, Images)
│   ├── PixelNikhil.png    # Profile Avatars
│   ├── java.png           # Tech Stack Icons
│   └── ...                # Other visual assets
├── src/
│   ├── assets/            # Source-relative assets (Fonts, SVGs)
│   └── style.css          # Main Tailwind entry point
├── index.html             # Application Entry Point
├── package.json           # Dependencies and Scripts
└── vite.config.ts         # Vite Configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nikhilqwert04/Portfolio-2.git
   cd Portfolio-2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

### Configuration

The project uses Tailwind CSS v4. Configuration is primarily handled via the `@tailwindcss/vite` plugin in `vite.config.ts`. To customize the theme, you can modify `src/style.css` using standard CSS variables or Tailwind directives.

## 💻 Usage

### Development
To run the project in development mode with HMR:
bash
npm run dev


### Production Build
To create an optimized production build in the `dist/` folder:
bash
npm run build


### Preview
To preview the production build locally:
bash
npm run preview

## 🛠 Development Guidelines

- **Styling**: Use Tailwind utility classes directly in the HTML. For custom components, use the `@theme` block in `src/style.css`.
- **Assets**: Place general icons in `/public` for direct referencing and specific UI assets in `src/assets` for Vite processing.
- **Code Style**: Follow standard ESM (ECMAScript Modules) practices.

## 🗺 Roadmap

- [ ] Integration of a contact form (Formspree or custom backend).
- [ ] Dark/Light mode toggle implementation.
- [ ] Dynamic project fetching via GitHub API.
- [ ] Framer Motion integration for advanced animations.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Developed by [Nikhil](https://github.com/Nikhilqwert04)**