/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta minimalista premium inspirada en Supa Palette y Linear
        background: {
          primary: "#0B0C0E",
          secondary: "#0F1012",
          tertiary: "#16171A",
          elevated: "#1F2124",
        },
        text: {
          primary: "#F4F4F6",
          secondary: "#8E939E",
          tertiary: "#6B7280",
          muted: "#4B5563",
        },
        border: {
          base: "#1F2124",
          light: "#2A2D32",
          accent: "#0066FF",
        },
        accent: {
          primary: "#0066FF", // Azul eléctrico
          green: "#00D084",   // Verde neón sutil
          purple: "#7C3AED",  // Púrpura para variantes
        },
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px", letterSpacing: "0px" }],
        sm: ["14px", { lineHeight: "20px", letterSpacing: "0px" }],
        base: ["16px", { lineHeight: "24px", letterSpacing: "0px" }],
        lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.02em" }],
        xl: ["20px", { lineHeight: "28px", letterSpacing: "-0.02em" }],
        "2xl": ["24px", { lineHeight: "32px", letterSpacing: "-0.02em" }],
        "3xl": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em" }],
        "4xl": ["40px", { lineHeight: "48px", letterSpacing: "-0.03em" }],
        "5xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em" }],
      },
      spacing: {
        gutter: "1.5rem",
        "gutter-2x": "3rem",
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      boxShadow: {
        none: "none",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "inset 0 1px 0 0 rgba(255, 255, 255, 0.06)",
      },
      backgroundImage: {
        "grid-subtle": "linear-gradient(to right, rgba(31, 33, 36, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(31, 33, 36, 0.2) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-base": "40px 40px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
}
