/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      laptop: { max: "800px" },
      mobile: { max: "500px" },
    },
    extend: {
      fontFamily: {
        franklin: [
          '"Franklin Gothic Medium"',
          '"Arial Narrow"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
