module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0a0f1b', // Deep slate/charcoal for dark mode
        foreground: '#f8f8f8', // Light text for readability on dark background
        accent: '#f44336', // Red-Accent for buttons and highlights
        secondaryAccent: '#00bcd4', // Cyan-Light for hover glow, icons, links
        borderLine: '#1a1f2d' // Subtle separation lines
      },
    },
  },
  plugins: [],
};
