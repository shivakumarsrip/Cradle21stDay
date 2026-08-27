import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FFFDF9",
          100: "#FAF6EE",
          200: "#F4EBD9",
          300: "#EFE6D5",
        },
        sandalwood: {
          100: "#F5ECE1",
          200: "#E6D7C3",
          300: "#DFD3C3",
          400: "#CBB69D",
          500: "#A88E70",
        },
        babyblue: {
          50: "#F0F6F9",
          100: "#E1EEF4",
          200: "#D4E4EC",
          300: "#B0CDDC",
          400: "#7B9EB2",
          500: "#5A8296",
          600: "#3D6276",
        },
        sage: {
          50: "#F3F7F3",
          100: "#E3EBE3",
          200: "#C8DAC8",
          400: "#88A088",
          600: "#4D6B4D",
        },
        gold: {
          100: "#FAF0D7",
          200: "#F3DC9B",
          300: "#E2BF66",
          400: "#D4AF37",
          500: "#C5A059",
          600: "#B38F48",
          700: "#8A6B29",
          800: "#604A1B",
        },
        indigoaccent: {
          800: "#2C3E50",
          900: "#1E3A4C",
        },
        traditionalred: {
          600: "#9E2B2B",
          700: "#801A1A",
        }
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Cinzel Decorative", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        telugu: ["var(--font-peddana)", "var(--font-noto-telugu)", "Ramabhadra", "serif"],
      },
      backgroundImage: {
        "gold-border-pattern": "linear-gradient(135deg, #D4AF37 0%, #FAF0D7 50%, #C5A059 100%)",
        "radial-highlight": "radial-gradient(circle at center, rgba(255,253,249,0.95) 0%, rgba(250,246,238,0.7) 100%)",
      },
      boxShadow: {
        "card-luxury": "0 10px 30px -5px rgba(184, 142, 60, 0.12), 0 4px 15px rgba(0, 0, 0, 0.04)",
        "gold-glow": "0 0 25px rgba(212, 175, 55, 0.25)",
      },
      animation: {
        "gentle-pulse": "gentlePulse 4s ease-in-out infinite",
        "subtle-float": "subtleFloat 6s ease-in-out infinite",
        "cradle-sway": "cradleSway 8s ease-in-out infinite",
      },
      keyframes: {
        gentlePulse: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        subtleFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        cradleSway: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

