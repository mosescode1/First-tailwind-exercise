/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('img/bg-mobile.svg')",
        desktop: "url('img/bg-desktop.svg')",
      },
      colors: {
        violet: "#674BAF",
        softMagenta: "#E882E8",
      },
      fontFamily: {
        Poppins: ["Poppins"],
        Open_sans: ["Open Sans"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
