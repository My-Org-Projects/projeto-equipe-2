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
        "botao-verde": "#22c55e",
        "botao-azul": "#1d4ed8",
        "botao-vermelho": "#EF4444",
        "botao-preto": "#27272A",
      },
    },
  },
  plugins: [],
};
export default config;
