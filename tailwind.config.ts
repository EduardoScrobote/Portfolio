import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    safelist: ["animate-[fade-in-left_1s_ease-in-out]"],
    extend: {
      backgroundImage: {
        giphy: "url('/giphy-11.gif')",
      },
      cursor: {
        fancy: "url('/cursor.png'), pointer",
      },
      keyframes: {
        wiggle: {
          pulse: {
            transform: "pulse 2s cubic-bezier(100, 100, 10.0, 50) infinite",
          },
        },
      },
      animation: {
        pulse: "pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
