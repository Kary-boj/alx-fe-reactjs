/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Automatically removes unused styles
  darkMode: "class", // Enables dark mode using a CSS class
  theme: {
    extend: {}, // Customize styles if needed
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "focus", "active", "group-hover"],
      textColor: ["hover", "focus", "active", "group-hover"],
      borderColor: ["hover", "focus", "active", "group-hover"],
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Improves form styles
    require("@tailwindcss/typography"), // Adds beautiful typography styles
    require("@tailwindcss/aspect-ratio"), // Helps with aspect ratios for images/videos
  ],
};

