// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// };

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   darkMode: ["class", '[data-theme="dark"]'], // Enable dark mode with `class` or `data-theme` attribute
//   plugins: [require("daisyui")],
// };

/** @type {import('tailwindcss').Config} */
// const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // flowbite.content(), // Add Flowbite React's content paths
  ],
  theme: {
    extend: {},
  },
  darkMode: ["class", '[data-theme="dark"]'], // Enable dark mode with `class` or `data-theme` attribute
  plugins: [
    require("daisyui"), // DaisyUI plugin
    // flowbite.plugin(), // Flowbite React plugin
  ],
};
