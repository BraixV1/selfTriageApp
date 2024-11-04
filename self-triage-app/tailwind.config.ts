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
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: '#3B5284',
        cyan: '#5BA8A0',
        green: '#CBE54E',
        darkerGreen: '#94B447',
        darkGreen: '#5D6E1E'
      },
    },
  },
  plugins: [],
};
export default config;
