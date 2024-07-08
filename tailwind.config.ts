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
        primary: '#2D3748', // Adjust to your desired primary color
        secondary: '#1A202C', // Adjust to your desired secondary color
        accent: '#E53E3E', // Adjust to your desired accent color
        background: '#1A202C', // Adjust to your desired background color
        surface: '#2D3748', // Adjust to your desired surface color
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
