/** @type {import('tailwindcss').Config} */
module.exports = {
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

      backgroundSize: {
        '50': '50% auto',
        
      },
      colors:{
        'franklin-green': '#ABEDAB',
        'trevor-orange': '#FFA357',
        'michael-blue': '#65B4D4',
      },
    },
  },
  plugins: [],
};
