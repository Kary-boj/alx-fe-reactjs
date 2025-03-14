/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Scan these files for Tailwind classes
  darkMode: "class", // Enables dark mode using a CSS class
  theme: {
    extend: {}, // Custom styles can be added here
  },
  plugins: [], // Add Tailwind plugins if needed
};

