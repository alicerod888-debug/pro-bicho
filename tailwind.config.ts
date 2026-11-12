import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: "#0F3D2E", deep: "#0A2A20", emerald: "#1F6F54" },
        cream: "#F6F0E3", sand: "#E9DFC8", gold: "#B8924A", ink: "#17241E",
      },
      fontFamily: { display: ["var(--font-display)", "serif"], sans: ["var(--font-body)", "system-ui", "sans-serif"] },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0) rotate(0deg)" }, "50%": { transform: "translateY(-14px) rotate(4deg)" } },
        ring: { "0%": { transform: "scale(.6)", opacity: ".5" }, "100%": { transform: "scale(1.8)", opacity: "0" } },
      },
      animation: { float: "float 9s ease-in-out infinite", ring: "ring 3.2s ease-out infinite" },
    },
  },
  plugins: [],
};
export default config;
