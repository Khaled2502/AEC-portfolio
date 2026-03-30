import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const HeroSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-lightBg dark:to-darkBg"></div>

      {/* Content */}
      <div className="relative section-container flex flex-col justify-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t("hero.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-grayMuted mb-12"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <a href="#projects" className="neon-button">
              {t("hero.cta.projects")}
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              {t("hero.cta.contact")}
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-6 direction-ltr"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grayMuted hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grayMuted hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-grayMuted hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary p-1">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mx-auto animate-scroll"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
