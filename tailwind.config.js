/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all your React + TSX files
  ],
  darkMode: "class", // Enables dark mode via class strategy
  theme: {
    extend: {
      colors: {
        accent: "#f43f5e",            // Rose-500, vibrant for buttons
        secondaryAccent: "#22d3ee",  // Cyan-400, perfect for highlights
        borderLine: "#4b5563",        // Slate-600, subtle borders
        background: "#0f172a",        // Dark slate background
        foreground: "#f8fafc",        // Light text for dark mode
      },
    },
  },
  plugins: [],
};
