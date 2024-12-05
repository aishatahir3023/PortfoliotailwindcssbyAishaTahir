import { Container } from "postcss";
import type { Config } from "tailwindcss";
import { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
};





export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      Container: {
        center: true,
        padding: "15px",
      

      },
      colors: {
        accent: "#08E95E"
      },
    },
  },
  plugins: [],
} 
