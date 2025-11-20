# Full-Stack Developer Portfolio

A modern, professional developer portfolio website built with React, Vite, Tailwind CSS, and shadcn/ui.

## 🎨 Design Features

- **HubSpot-inspired** clean and modern UI
- **Brand colors**: Professional blue (#0052CC), cyan (#00B3F0), and coral (#FF7A59)
- **Typography**: Poppins for headings, Inter for body text
- Smooth animations and transitions
- Fully responsive design
- Optimized for SEO

## 🚀 Tech Stack

- **React 18+** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## 📦 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx       # Navigation component
│   ├── Footer.tsx       # Footer component
│   └── ProjectCard.tsx  # Reusable project card
├── pages/
│   ├── Index.tsx        # Home page
│   ├── Projects.tsx     # Projects showcase
│   ├── About.tsx        # About & skills
│   └── Contact.tsx      # Contact form
├── assets/              # Images and media
├── lib/                 # Utilities
└── App.tsx             # Main app component
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ and npm installed ([Install with nvm](https://github.com/nvm-sh/nvm))

### Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## 🎨 Customization

### Update Brand Colors

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary: 214 100% 40%;     /* Main brand color */
  --secondary: 194 100% 47%;   /* Secondary color */
  --accent: 12 100% 67%;       /* Accent color */
}
```

### Update Typography

Modify `index.html` to change fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update `tailwind.config.ts`:

```typescript
fontFamily: {
  heading: ['Your Heading Font', 'sans-serif'],
  body: ['Your Body Font', 'sans-serif'],
}
```

### Update Project Content

Edit the project data in:
- `src/pages/Index.tsx` - Featured projects
- `src/pages/Projects.tsx` - Full project list
- `src/pages/About.tsx` - Skills and experience
- `src/pages/Contact.tsx` - Contact information

## 🎯 Featured Projects

### Beyaa
Multi-tenant ecommerce platform builder (Shopify-like)
- Multi-store management
- Payment processing
- Customizable themes
- Tech: React, Node.js, PostgreSQL, Stripe

### Vital Connect
Healthcare telemedicine platform
- Video consultations
- Appointment scheduling
- Electronic health records
- Tech: React, Express, MongoDB, WebRTC

## 📱 Pages

1. **Home** - Hero, services, tech stack, featured projects
2. **Projects** - Detailed project showcase with tech stacks
3. **About** - Bio, skills, experience, services
4. **Contact** - Contact form and social links

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Vite and deploy

Or use Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` directory.

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 Environment Variables

No environment variables required for basic functionality. If you integrate APIs (contact forms, analytics, etc.), create a `.env` file:

```env
VITE_API_URL=your_api_url
VITE_ANALYTICS_ID=your_analytics_id
```

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components:
- Button
- Card
- Input
- Textarea
- Badge
- Toast notifications
- And more...

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📧 Contact

- **Fiverr**: [Your Fiverr Profile]
- **Upwork**: [Your Upwork Profile]
- **GitHub**: [Your GitHub]
- **LinkedIn**: [Your LinkedIn]

---

Built with ❤️ using React, Vite, and Tailwind CSS
