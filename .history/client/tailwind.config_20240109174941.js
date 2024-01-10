/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray : "#F5F5F5",
        customDark : "#323134",
        customPink : "#D37A7B",
        customPurple : "#A5A4FF",
        customYellow : "#F9B234",
        customBlue : "#1ABBED",
        primaryBG: "#272741",
        lightBG: "#4A4A5F",
        darkBG: "#151523",

        creamYellow: "#FBCB77",
        creamPink: "#F1B7C1",
        creamBlue: "#66D1F3",
        creamPurple: "#BBB4D7",
        creamGreen: "#A7EAD1",
        creamOrange: "#FFCEAB",
        creamBrown: "#FFCEAB",
        creamLime: "#E3E9BE"

      },
    },
  },
  plugins: [],
};
