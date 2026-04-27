import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        // Force all rounded utilities (except full) to 8px globally
        none: "0",
        sm: "8px",
        DEFAULT: "8px",
        md: "8px",
        lg: "8px",
        xl: "8px",
        "2xl": "8px",
        "3xl": "8px",
      },
      colors: {
        // Deep purple background palette (from color demo)
        ink: {
          950: "#0B0420", // deepest
          900: "#120736", // base bg
          800: "#1A0B47", // elevated
          700: "#241159", // card bg
          600: "#321978", // border / hover
          500: "#4623A6",
        },
        // Brand yellow / gold accent
        gold: {
          50: "#FFF9E0",
          100: "#FFF0B3",
          200: "#FFE680",
          300: "#FFDC4D",
          400: "#FFD21A",
          500: "#FFC107", // primary accent
          600: "#E6A800",
          700: "#B38500",
        },
        // Soft lavender for muted text on dark
        muted: {
          DEFAULT: "#C8B8E8",
          dark: "#8B7BB0",
        },
        // Light-theme surfaces
        paper: {
          DEFAULT: "#FFFFFF",
          50: "#FBFAFE",
          100: "#F6F3FC", // page background
          200: "#EFE9F8", // alternate band
          300: "#E5DDF3", // border / divider
          400: "#D2C5EA",
        },
        // Dark text colors used on light surfaces
        body: {
          DEFAULT: "#1A0B47", // primary text on light
          soft: "#3A2A6B",   // secondary text
          muted: "#7A6B9C",  // muted text on light
        },
      },
      fontFamily: {
        bangla: ["var(--font-hind-siliguri)", "system-ui", "sans-serif"],
        display: ["var(--font-hind-siliguri)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse at top, #2A1066 0%, #120736 45%, #0B0420 100%)",
        "page-soft":
          "radial-gradient(ellipse 1200px 600px at 20% -10%, rgba(70,35,166,0.10), transparent 60%), radial-gradient(ellipse 900px 500px at 90% 0%, rgba(255,193,7,0.10), transparent 60%)",
        "purple-glow":
          "radial-gradient(circle at 50% 0%, rgba(70,35,166,0.18), transparent 60%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(50,25,120,0.6) 0%, rgba(26,11,71,0.8) 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #FFD21A 0%, #FFC107 50%, #E6A800 100%)",
        "slide-purple":
          "radial-gradient(ellipse at 30% 30%, #3A1A85 0%, #1F0B5A 50%, #120736 100%)",
        "slide-indigo":
          "radial-gradient(ellipse at 30% 30%, #1E3A8A 0%, #1E1B4B 50%, #0F0A2E 100%)",
        "slide-rose":
          "radial-gradient(ellipse at 30% 30%, #831843 0%, #4A1042 50%, #1F0B2E 100%)",
        "slide-emerald":
          "radial-gradient(ellipse at 30% 30%, #064E3B 0%, #0E2A45 50%, #0B1530 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(255, 193, 7, 0.45)",
        "glow-sm": "0 0 18px -4px rgba(255, 193, 7, 0.4)",
        card: "0 10px 30px -12px rgba(70, 35, 166, 0.18)",
        "card-hover": "0 18px 40px -12px rgba(70, 35, 166, 0.25)",
        "card-dark": "0 8px 32px -12px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        shine: "shine 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255, 193, 7, 0.5)" },
          "50%": { boxShadow: "0 0 0 14px rgba(255, 193, 7, 0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
