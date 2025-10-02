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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.foreground[800]'),
            '--tw-prose-headings': theme('colors.accent'),
            '--tw-prose-lead': theme('colors.foreground[700]'),
            '--tw-prose-links': theme('colors.secondaryAccent'),
            '--tw-prose-bold': theme('colors.foreground'),
            '--tw-prose-counters': theme('colors.foreground[600]'),
            '--tw-prose-bullets': theme('colors.borderLine'),
            '--tw-prose-hr': theme('colors.borderLine'),
            '--tw-prose-quotes': theme('colors.accent'),
            '--tw-prose-quote-borders': theme('colors.borderLine'),
            '--tw-prose-captions': theme('colors.foreground[700]'),
            '--tw-prose-code': theme('colors.secondaryAccent'),
            '--tw-prose-pre-code': theme('colors.secondaryAccent'),
            '--tw-prose-pre-bg': theme('colors.gray[800]'),
            '--tw-prose-th-borders': theme('colors.borderLine'),
            '--tw-prose-td-borders': theme('colors.borderLine'),

            // Invert styles for dark mode
            '--tw-prose-invert-body': theme('colors.foreground'),
            '--tw-prose-invert-headings': theme('colors.accent'),
            '--tw-prose-invert-lead': theme('colors.foreground'),
            '--tw-prose-invert-links': theme('colors.secondaryAccent'),
            '--tw-prose-invert-bold': theme('colors.foreground'),
            '--tw-prose-invert-counters': theme('colors.foreground'),
            '--tw-prose-invert-bullets': theme('colors.borderLine'),
            '--tw-prose-invert-hr': theme('colors.borderLine'),
            '--tw-prose-invert-quotes': theme('colors.accent'),
            '--tw-prose-invert-quote-borders': theme('colors.borderLine'),
            '--tw-prose-invert-captions': theme('colors.foreground'),
            '--tw-prose-invert-code': theme('colors.secondaryAccent'),
            '--tw-prose-invert-pre-code': theme('colors.secondaryAccent'),
            '--tw-prose-invert-pre-bg': 'rgba(30, 41, 59, 0.8)', // slate-800 with opacity
            '--tw-prose-invert-th-borders': theme('colors.borderLine'),
            '--tw-prose-invert-td-borders': theme('colors.borderLine'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
