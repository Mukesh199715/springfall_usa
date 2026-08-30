# Spring/Fall USA - F1 Visa Guide & Preparation Platform

![Spring/Fall USA](https://img.shields.io/badge/version-0.0.0-blue)
![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.1-646cff?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.11-38b2ac?logo=tailwind-css)

## 📋 Overview

**Spring/Fall USA** is a comprehensive web platform designed to help international students successfully navigate the F-1 visa application process in the United States. The platform provides free guidance, resources, real visa experiences from other students, interview preparation materials, and a supportive community for aspiring international students.

### 🎯 Mission

To simplify and demystify the F-1 visa process by providing centralized, free resources, peer-to-peer experiences, and expert guidance, making it easier for international students to study in the USA.

### 💡 Key Features

- **F1 Visa Information Hub**: Comprehensive guides on visa process, requirements, and timelines
- **Interview Preparation**: Interactive guides and tips for visa interviews
- **Visa Experiences Sharing**: Students can share their real visa experiences and outcomes
- **Testimonials Platform**: Success stories from approved visa candidates
- **Blog System**: Latest news and articles about F1 visa process
- **Admin Dashboard**: Manage content, elections, and platform activities
- **User Authentication**: Secure login and registration system
- **Donation System**: Support the platform's mission
- **Responsive Design**: Fully optimized for desktop and mobile devices
- **Community Links**: Connect with other international students
- **Logo Competition**: Platform branding contests
- **Notifications System**: Emergency notices and updates

---

## 🏗️ Architecture & Tech Stack

### Frontend Technologies

| Technology         | Purpose                      | Version |
| ------------------ | ---------------------------- | ------- |
| **React**          | UI library                   | 18.3.1  |
| **TypeScript**     | Type safety                  | 5.5.3   |
| **Vite**           | Build tool & dev server      | 5.4.1   |
| **React Router**   | Client-side routing          | 6.26.2  |
| **TanStack Query** | Server state management      | 5.56.2  |
| **Tailwind CSS**   | Utility-first CSS            | 3.4.11  |
| **shadcn/ui**      | Component library (Radix UI) | Latest  |

### Backend & Database

| Service                | Purpose                              |
| ---------------------- | ------------------------------------ |
| **Firebase/Firestore** | Real-time database & authentication  |
| **Supabase**           | PostgreSQL-based backend alternative |
| **CryptoJS**           | Data encryption                      |

### Styling & Animation

| Library                 | Purpose             | Version |
| ----------------------- | ------------------- | ------- |
| **Framer Motion**       | React animations    | 12.23.6 |
| **GSAP**                | Advanced animations | 3.13.0  |
| **React Parallax Tilt** | 3D tilt effects     | 1.7.301 |
| **Tailwind Animate**    | Utility animations  | 1.0.7   |

### UI Components

- **shadcn/ui** - Pre-built, customizable components including:
  - Accordion, Alert, Avatar, Badge, Button, Calendar
  - Card, Carousel, Checkbox, Collapsible, Command, Dialog
  - Dropdown Menu, Form, Input, Label, Navigation Menu
  - Popover, Select, Sheet, Sidebar, Tabs, Toast, Tooltip
  - And many more...

### Form Management

| Library                 | Version | Purpose                            |
| ----------------------- | ------- | ---------------------------------- |
| **React Hook Form**     | 7.53.0  | Efficient form state management    |
| **Zod**                 | 3.23.8  | Schema validation & type inference |
| **@hookform/resolvers** | 3.9.0   | Integration with validators        |

### Additional Libraries

- **React Icons** - Icon set library (5.5.0)
- **Lucide React** - Modern icon library (0.462.0)
- **Sonner** - Toast notifications (1.5.0)
- **Recharts** - Data visualization (2.12.7)
- **Date-fns** - Date manipulation (3.6.0)
- **Next Themes** - Dark mode support (0.3.0)
- **Embla Carousel** - Carousel component (8.3.0)
- **Input OTP** - OTP input handling (1.2.4)
- **Styled Components** - CSS-in-JS styling (6.1.19)

---

## 📁 Project Structure

```
springfall/
├── public/                          # Static public files
│   ├── index.html
│   └── robots.txt
│
├── src/
│   ├── assets/                      # Images and media assets
│   │   └── images/
│   │       └── logo/
│   │
│   ├── components/                  # React components
│   │   ├── common/                  # Reusable common components
│   │   │   ├── AboutCards.tsx
│   │   │   ├── Cards.tsx
│   │   │   ├── CardSection.tsx
│   │   │   ├── DesktopModeCheck.tsx
│   │   │   ├── ScrollUp.tsx
│   │   │   └── F1visaInfo/
│   │   │       ├── DocumentsTab.tsx
│   │   │       ├── F1visaSection.tsx
│   │   │       ├── FAQTab.tsx
│   │   │       ├── OverviewTab.tsx
│   │   │       ├── ProcessTab.tsx
│   │   │       └── RequirementsTab.tsx
│   │   │
│   │   ├── home/                    # Home page sections
│   │   │   ├── AboutUsSection.tsx
│   │   │   ├── AdminSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── DonationSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── F1VisaGuideSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── GlobeSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroSection.module.css
│   │   │   ├── LogoCompetitionSection.tsx
│   │   │   ├── PartnersSection.tsx
│   │   │   ├── StudyUSASection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── VisaInterviewSection.tsx
│   │   │   └── VisaTimelineSection.tsx
│   │   │
│   │   ├── layout/                  # Layout components
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   │
│   │   ├── notice/                  # Notice/notification components
│   │   │   ├── EmergencyNoticeSection.tsx
│   │   │   ├── NoticeBanner.tsx
│   │   │   └── NoticeData.ts
│   │   │
│   │   ├── ui/                      # shadcn/ui components
│   │   │   ├── accordion.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ... (many more UI components)
│   │   │
│   │   └── EmergencyNotice.tsx
│   │
│   ├── pages/                       # Page components (routes)
│   │   ├── AboutPage.tsx
│   │   ├── AdminDashboardPage.tsx
│   │   ├── AdminElectionPage.tsx
│   │   ├── AdminLoginPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── BlogPostPage.tsx
│   │   ├── CommunityLinks.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── F1VisaInfoPage.tsx
│   │   ├── ForgotPasswordPage.tsx
│   │   ├── Index.tsx                # Home page
│   │   ├── InterviewPrepPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── LogoCompetitionPage.tsx
│   │   ├── NotFound.tsx             # 404 page
│   │   ├── NoticePage.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── ResourcesPage.tsx
│   │   ├── ShareExperiencePage.tsx
│   │   ├── ShareTestimonialPage.tsx
│   │   ├── SingleVisaExperiencePage.tsx
│   │   ├── TestimonialsPage.tsx
│   │   ├── UniportalPage.tsx
│   │   └── VisaExperiencesPage.tsx
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── use-mobile.tsx           # Mobile detection hook
│   │   └── use-toast.ts             # Toast notification hook
│   │
│   ├── lib/                         # Utility functions
│   │   └── utils.ts
│   │
│   ├── types/                       # TypeScript type definitions
│   │   ├── database.ts              # Database type definitions
│   │   └── jsx.d.ts
│   │
│   ├── utils/                       # Helper utilities
│   │   └── generateEncryptedCredentials.ts
│   │
│   ├── data/                        # Static data
│   │   └── experiences.ts
│   │
│   ├── server/                      # Server-side code
│   │   └── middleware/
│   │
│   ├── App.tsx                      # Main App component
│   ├── App.css                      # Global styles
│   ├── index.css                    # Global CSS
│   ├── main.tsx                     # React entry point
│   ├── Index.tsx                    # Alternative index file
│   ├── vite-env.d.ts                # Vite environment types
│   └── firebaseConfig.js            # Firebase configuration
│
├── Configuration Files
│   ├── package.json                 # Dependencies & scripts
│   ├── tsconfig.json                # TypeScript config
│   ├── tsconfig.app.json            # App TypeScript config
│   ├── tsconfig.node.json           # Node TypeScript config
│   ├── vite.config.ts               # Vite configuration
│   ├── tailwind.config.ts           # Tailwind CSS configuration
│   ├── postcss.config.js            # PostCSS configuration
│   ├── eslint.config.js             # ESLint configuration
│   ├── components.json              # shadcn/ui configuration
│   ├── .env.example                 # Environment variables template
│   ├── .gitignore                   # Git ignore rules
│   └── bun.lockb                    # Bun package lock file
│
└── README.md                        # This file
```

---

## 🚀 Quick Start Guide

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9+) or **Bun** (v1.0+) - Package managers
- **Git** - Version control

### Installation Steps

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd springfall
```

#### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using Bun:

```bash
bun install
```

#### 3. Configure Environment Variables

Create a `.env.local` file in the root directory based on `.env.example`:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual credentials:

```env
# Supabase Configuration
VITE_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
VITE_PUBLIC_SUPABASE_ANON_KEY="your-anon-key-here"

# Server-side Credentials (not exposed to client)
SUPABASE_SERVICE_KEY="your-service-key"
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="your-secure-password"
JWT_SECRET="your-jwt-secret"

# Rate Limiting
RATE_LIMIT_MAX_REQUESTS=100
RATE_LIMIT_WINDOW_MS=60000
```

**Note**: Firebase config is already embedded in `src/firebaseConfig.js`

#### 4. Start Development Server

Using npm:

```bash
npm run dev
```

Or using Bun:

```bash
bun dev
```

The application will be available at:

- **Frontend**: http://localhost:8080
- **HMR Server**: Configured via Vite

#### 5. Start Backend Server (Optional)

If using Node.js backend:

```bash
npm run server
```

This starts a Nodemon-based server that automatically restarts on file changes.

---

## 📝 Available Scripts

### Development

```bash
# Start development server with hot reload
npm run dev

# Start backend server with auto-reload
npm run server
```

### Building

```bash
# Build for production (optimized)
npm run build

# Build in development mode
npm run build:dev

# Preview production build locally
npm run preview
```

### Code Quality

```bash
# Run ESLint to check code quality
npm run lint
```

---

## 🌐 Routes & Pages

| Route                     | Page                     | Purpose                              |
| ------------------------- | ------------------------ | ------------------------------------ |
| `/`                       | Index/Home               | Landing page with all major sections |
| `/about`                  | AboutPage                | Information about Spring/Fall USA    |
| `/f1-visa-info`           | F1VisaInfoPage           | Comprehensive F1 visa information    |
| `/interview-prep`         | InterviewPrepPage        | Visa interview preparation guide     |
| `/visa-experiences`       | VisaExperiencesPage      | List of student visa experiences     |
| `/visa-experiences/:id`   | SingleVisaExperiencePage | Individual visa experience detail    |
| `/visa-experiences/share` | ShareExperiencePage      | Form to share visa experience        |
| `/testimonials`           | TestimonialsPage         | Success stories from students        |
| `/testimonials/share`     | ShareTestimonialPage     | Form to share testimonial            |
| `/resources`              | ResourcesPage            | Links and resources for F1 process   |
| `/uniportal`              | UniportalPage            | University portal information        |
| `/dashboard`              | DashboardPage            | User dashboard (authenticated)       |
| `/profile`                | ProfilePage              | User profile page                    |
| `/blog`                   | BlogPage                 | Blog posts list                      |
| `/blog/:slug`             | BlogPostPage             | Individual blog post                 |
| `/notice/:slug`           | NoticePage               | Notice/announcement detail           |
| `/admin-login`            | AdminLoginPage           | Admin login                          |
| `/admin-dashboard`        | AdminDashboardPage       | Admin control panel                  |
| `/admin-elections`        | AdminElectionPage        | Admin election management            |
| `/logo-competition`       | LogoCompetitionPage      | Logo competition details             |
| `/community`              | CommunityLinks           | Community links page                 |
| `/login`                  | LoginPage                | User login                           |
| `/register`               | RegisterPage             | User registration                    |
| `/forgot-password`        | ForgotPasswordPage       | Password reset                       |
| `*`                       | NotFound                 | 404 error page                       |

---

## 🔐 Authentication

The application uses **Supabase** for authentication (with Firebase/Firestore as fallback).

### Features

- Email/password authentication
- User registration & login
- Password reset functionality
- Role-based access (User, Admin)
- Session management
- Protected routes

### Authentication Flow

1. Users register/login via the Login/Register pages
2. Credentials are validated through Supabase
3. JWT token is issued and stored
4. Protected pages check authentication status
5. Admin pages require admin role

---

## 💾 Database Schema

### Collections in Firestore/Supabase

#### `visa_experiences`

```typescript
{
  id: string;
  name: string;
  university: string;
  consulate: string;
  major: string;
  interview_date: string;
  approved: 'yes' | 'no' | 'administrative';
  experience: string;
  email?: string;
  created_at: string;
  visaofficer?: string;
}
```

#### `testimonials`

```typescript
{
  id: string;
  name: string;
  university: string;
  photo_url?: string;
  quote: string;
  role?: string;
  email?: string;
  created_at: string;
}
```

#### `notices`

```typescript
{
  id: string;
  title: string;
  content: string;
  is_active: boolean;
  created_at: string;
  slug: string;
}
```

#### `users`

```typescript
{
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  university?: string;
  major?: string;
  created_at: string;
  role: 'user' | 'admin';
}
```

---

## 🎨 Styling & Customization

### Tailwind CSS Configuration

- **File**: `tailwind.config.ts`
- **Base Color**: Slate
- **Features**:
  - CSS variables for themes
  - Dark mode support via class strategy
  - Responsive breakpoints
  - Extended colors and spacing
  - Typography plugin

### Customizing Colors

Edit `src/index.css` to modify CSS variables:

```css
:root {
  --primary: 220 90% 56%; /* Primary brand color */
  --secondary: 221 83% 53%; /* Secondary color */
  --background: 0 0% 100%; /* Background color */
  --foreground: 222 84% 5%; /* Text color */
  /* ... more variables */
}
```

### Adding New Components

Use shadcn/ui CLI:

```bash
npx shadcn-ui@latest add [component-name]
```

Example:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

---

## 🔄 State Management

### TanStack Query (React Query)

- Handles server state, caching, and synchronization
- Configured in `App.tsx` with QueryClient
- Used for API calls and data fetching

### Local State

- React hooks (useState, useContext)
- React Hook Form for form state
- Zustand or Context API for global state

---

## 🧪 Testing

Currently, no automated tests are configured. To add testing:

```bash
# Install testing dependencies
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom

# Create test files with .test.tsx or .spec.tsx extension
```

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: 1280px and above
- **Tablet**: 768px to 1279px
- **Mobile**: Below 768px

Use the `use-mobile` hook to detect mobile devices:

```typescript
import { useIsMobile } from "@/hooks/use-mobile";

const isMobile = useIsMobile();
```

---

## 🌙 Dark Mode Support

Dark mode is available via `next-themes`:

```typescript
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </button>
  )
}
```

---

## 🔒 Security Best Practices

### Implemented

- ✅ Environment variables for sensitive data
- ✅ CryptoJS for data encryption
- ✅ Rate limiting on server
- ✅ TypeScript for type safety
- ✅ Input validation with Zod

### Recommended

- 🔄 HTTPS only in production
- 🔄 CORS configuration
- 🔄 CSP headers
- 🔄 Regular dependency updates
- 🔄 Security headers (X-Frame-Options, etc.)

---

## 📊 Performance Optimization

### Implemented

- ✅ Vite for fast HMR and optimized builds
- ✅ React.lazy() for code splitting
- ✅ Image optimization
- ✅ CSS-in-JS only when necessary
- ✅ TanStack Query caching

### Lighthouse Goals

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Dependencies Not Installing

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 2. Port Already in Use

```bash
# Change port in vite.config.ts or use
npm run dev -- --port 3000
```

#### 3. Environment Variables Not Loading

- Ensure `.env.local` file exists in root
- Restart development server after changes
- Use `VITE_` prefix for public variables

#### 4. Build Errors

```bash
# Clear cache and rebuild
npm run build -- --force
```

#### 5. TypeScript Errors

```bash
# Restart TypeScript server in your IDE
# or regenerate types
npm run build
```

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "preview"]
```

Build and run:

```bash
docker build -t springfall-usa .
docker run -p 8080:8080 springfall-usa
```

---

## 📚 Documentation & Resources

### Official Docs

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Supabase Documentation](https://supabase.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)

### Community

- GitHub Issues & Discussions
- Stack Overflow
- React Discord Community

---

## 📄 License

This project is proprietary software. All rights reserved.

---

## 👥 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Write meaningful variable/function names
- Add comments for complex logic
- Keep components small and focused

---

## 📞 Support & Contact

For issues, bugs, or feature requests:

- **GitHub Issues**: Report via GitHub
- **Email**: support@springfallus.org
- **Website**: www.springfallus.org

---

## 🙏 Acknowledgments

- **shadcn/ui** for the amazing component library
- **Vercel** for Vite and related tools
- **Firebase** for real-time database
- **Supabase** for PostgreSQL backend
- All contributors and community members

---

## 📈 Roadmap

### Planned Features

- [ ] Mobile app (React Native)
- [ ] AI-powered visa question answering
- [ ] Video interviews with visa officers
- [ ] Interactive visa timeline calculator
- [ ] Multi-language support
- [ ] Automated email notifications
- [ ] Advanced analytics dashboard
- [ ] Integration with university portals
- [ ] Payment gateway for premium content
- [ ] Social media integration

### Known Issues

- Mobile view for some pages needs optimization
- Dark mode theme colors need adjustment
- Admin dashboard UX improvements pending

---

## 📋 Changelog

### Version 0.0.0 (Current)

- Initial project setup
- Core features implemented
- Responsive design
- Authentication system
- Admin dashboard
- Blog & testimonials system

---

**Last Updated**: August 30, 2026

For the latest updates and information, visit the project repository or website.
