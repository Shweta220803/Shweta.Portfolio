# Shweta Bharti — Developer Portfolio

A modern, responsive developer portfolio built with Next.js, React, Tailwind CSS, and Motion. It showcases my projects, technical skills, learning journey, and provides a functional contact form powered by Resend.

## ✨ Features

- **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
- **Dark and Light Mode** — Switch themes with saved preferences.
- **Animated UI** — Smooth entrance animations and interactive hover effects.
- **About Me** — Introduction and development background.
- **Skills Section** — Overview of my technical skills.
- **Featured Projects** — Highlights selected projects with technology tags and links.
- **Education & Learning Journey** — Showcases my education and ongoing learning.
- **Functional Contact Form** — Sends messages directly to my email using Resend.
- **SEO Metadata** — Page title, description, keywords, and Open Graph metadata.
- **Mobile Navigation** — Responsive navigation menu for smaller screens.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and application routing |
| React | User interface development |
| JavaScript | Application logic |
| Tailwind CSS | Responsive styling |
| Motion | Animations and interactions |
| Resend | Contact form email delivery |
| Git & GitHub | Version control and source code hosting |
| Vercel | Deployment |

## 📂 Project Structure

```text
my-portfolio/
├── public/
│   ├── developer-hero.png
│   ├── favicon.png
│   └── projects/
│       ├── ai-whiteboard.png
│       ├── inkforge-blog.png
│       └── portfolio.png
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── components/
│       ├── About.jsx
│       ├── Contact.jsx
│       ├── Experience.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── Navbar.jsx
│       ├── Projects.jsx
│       ├── Skills.jsx
│       └── ThemeToggle.jsx
├── .env.local
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- Git installed
- A Resend account and API key for the contact form

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd my-portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

Replace the example values with your actual credentials. Never commit your real API key to GitHub.

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for production

```bash
npm run build
```

## 📧 Contact Form

The contact form uses a Next.js API route and Resend to deliver messages to the configured email address.

- Validates required fields.
- Sends messages through the backend API.
- Displays success or error feedback.
- Uses environment variables to protect API credentials.

For production email delivery, configure a verified sending domain in Resend if required.

## 🌐 Deployment

This project can be deployed on Vercel.

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add `RESEND_API_KEY` and `CONTACT_EMAIL` in the Vercel project environment variables.
4. Deploy the application.
5. Test the deployed website and contact form.

## 📌 Featured Projects

### 1. AI Whiteboard Notes

A full-stack application for organizing whiteboards, creating notes, and accessing AI-powered functionality.

**Technologies:** Next.js, TypeScript, Tailwind CSS, MongoDB, Gemini AI.

### 2. InkForge AI Blog App

An AI-powered blogging application for creating and managing blog content and exploring articles.

**Technologies:** React, Node.js, Express.js, MongoDB, Gemini AI, ImageKit.

### 3. Developer Portfolio

A responsive portfolio website featuring animated sections, theme switching, project showcases, and email contact functionality.

**Technologies:** Next.js, Tailwind CSS, Motion, Resend.

## 🔐 Security

- Keep `.env.local` out of version control.
- Never expose API keys in client-side code.
- Store production secrets in Vercel environment variables.
- Validate incoming contact form data on the server.

## 👩‍💻 About Me

I'm Shweta Bharti, a B.Tech graduate focused on full-stack web development. I build projects using React, Next.js, Node.js, Express.js, and MongoDB while continuously improving my development skills.

I'm interested in building useful web applications, integrating AI features, and learning through practical projects.

## 📬 Connect With Me

- **GitHub:** [YOUR_GITHUB_PROFILE_URL](https://github.com/Shweta220803/Shweta.Portfolio)
- **LinkedIn:** [YOUR_LINKEDIN_PROFILE_URL](https://www.linkedin.com/in/shweta-bharti-48b850259/)
- **Portfolio:** [YOUR_DEPLOYED_PORTFOLIO_URL](https://shweta-portfolio-two.vercel.app/)
- **Email:** YOUR_EMAIL_ADDRESS

---

⭐ If you find my work interesting, feel free to explore my repositories and connect with me.
