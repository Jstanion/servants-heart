/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3ab2c4",

          secondary: "#a8977b",

          accent: "#df8a57",

          neutral: "#1b171c",

          "base-100": "#f6f3eb",

          info: "#71a49f",

          success: "#16c56e",

          warning: "#f6cd46",

          error: "#f4626e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
