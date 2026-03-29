/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00A8FF",
        accent: "#00FFD1",
        darkBg: "#0B0F19",
        lightBg: "#F8FAFC",
        textLight: "#E2E8F0",
        textDark: "#1E293B",
        grayMuted: "#94A3B8",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 10px rgba(0, 168, 255, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
