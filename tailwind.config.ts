import type { Config } from "tailwindcss";
import { screens } from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    screens: {
      xs: "400px",
      ...screens,
    },
    extend: {
      colors: {
        dark: "#111111",
        dark2: "#151515",
        dark3: "#0C0C0C",
        green: "#43C6AC",
        "yellow-1": "#F8FFAE",
        "gray-1": "#677487",
        "gray-2": "#2D2D2D",
        "gray-3": "#9C9C9C",
        "gray-4": "#C7C7C7",
        "gray-5": "#767676",
      },
      fontFamily: {
        sans: [
          "cabinet-grotesk",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
        inter: [
          "inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
        firacode: [
          "fira-code",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
