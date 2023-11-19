/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      sans: ["Jura", "Inter", "sans-serif"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        julius: ["Julius Sans One", "sans-serif"],
        jura: ["Jura", "sans-serif"],
      },
      text: {
        heading: "100rem",
        subheading: "50rem",
      },
    },
  },

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },

  plugins: [require("daisyui")],
};

module.exports = config;
