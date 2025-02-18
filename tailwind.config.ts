import type { Config } from "tailwindcss";
//module.exports = { content: [ "./app//*.{js,ts,jsx,tsx,mdx}", "./pages//.{js,ts,jsx,tsx,mdx}", "./components/**/.{js,ts,jsx,tsx,mdx}", ], // any other customizations... };

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
