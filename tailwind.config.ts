import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#4fd1ff",
          emerald: "#3fe0a1",
          deep: "#07111f",
          navy: "#0b1830"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(79, 209, 255, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
