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
        bananaYellow: "#FBCB77"
      },
    },
  },
  plugins: [],
};
