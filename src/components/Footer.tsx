import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { FiSun, FiMoon } from "react-icons/fi";

const Footer = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <footer className="bg-white dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-grayMuted text-center md:text-left mb-4 md:mb-0">
              {t("footer.copyright")}
            </p>
          </motion.div>

          {/* Theme and Language Controls */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors"
            >
              {language === "en" ? "عربي" : "EN"}
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
