# AEC Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode support, multi-language support (English & Arabic), and smooth animations.

## 🌟 Features

- ⚡ **Fast & Modern**: Built with Vite for lightning-fast development and builds
- 🎨 **Beautiful UI**: Tailwind CSS with custom animations
- 🌙 **Dark Mode**: Full dark/light theme support
- 🌍 **Multi-Language**: Support for English and Arabic
- 📱 **Responsive**: Mobile-friendly design
- ✨ **Smooth Animations**: Framer Motion animations
- 🎯 **Optimized**: TypeScript for type safety

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **react-i18next** - Internationalization
- **React Icons** - Icon Library

## 📦 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/aec-portfolio.git
cd aec-portfolio
```

2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Linting

Check for linting errors:

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ProjectsSection.tsx
│   └── ServicesSection.tsx
├── contexts/           # Context API
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── translations/       # i18n translations
│   ├── ar.json
│   └── en.json
├── assets/            # Images and static files
│   └── images/
├── App.tsx
├── index.css
└── main.tsx
```

## 🌐 Internationalization

The project supports both English and Arabic. Translations are managed using react-i18next.

- English translations: `src/translations/en.json`
- Arabic translations: `src/translations/ar.json`

## 🎨 Theme Customization

Customize the theme in `tailwind.config.js`:

```js
export default {
  theme: {
    extend: {
      colors: {
        // Your custom colors
      },
    },
  },
};
```

## 📝 Environment Variables

Create a `.env.local` file in the root directory (if needed):

```
VITE_API_URL=your_api_url
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Deploy the dist folder to Netlify
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

[Your Name]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or inquiries, please contact: [your-email@example.com]

## 🙏 Acknowledgments

- React community
- Tailwind CSS
- Vite team
