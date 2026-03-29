import { useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  // Handle initial scroll restoration
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-lightBg dark:bg-darkBg text-textDark dark:text-textLight">
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
