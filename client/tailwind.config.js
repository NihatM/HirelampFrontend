// const tailwindcss = require("tailwindcss");

// module.exports = {
//   purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   darkMode: false,
//   theme: {
//     extend: {
//       colors: {
//         "custom-blue": "#0096FF",
//       },
//       animation: ["group-hover"],
//     },
//   },
//   variants: {
//     textColor: ["responsive", "hover", "focus", "group-hover"],
//     backgroundColor: ["responsive", "hover", "focus", "group-hover"],
//     display: ["group-hover"],
//   },
//   plugins: [],
// };

const tailwindcss = require("tailwindcss");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  darkMode: false, // or 'media' or 'class'
  variants: {
    display: ["responsive"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    margin: ["responsive", "hover"],
    padding: ["responsive"],
  },
  theme: {
    extend: {
      width: {
        111: "111px",
        379: "379px",
        399: "399px",
        350: "350px",
        282: "282px",
        320: "320px",
        400: "400px",
        493: "493px",
        671: "671px",
      },
      colors: {
        "custom-blue": "#0096FF",
        "dark-blue": "#001C5B",
        "light-blue": "#F1F9FF",
        "border-gray": "#AEAEAE",
        "custom-gray": "#6F7EA1",
        "footer-blue": "#02375C",
        "card-blue": "#d4edff",
        "price-green": "#25D797",
      },
      boxShadow: {
        "3xl": "0 0px 20px -15px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        xs: "320px",
      },
      animation: ["group-hover"],
      backgroundImage: {
        "bg-bottom": "url('/src/assets/bgbottom.svg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  // variants: {
  //   textColor: ["responsive", "hover", "focus", "group-hover"],
  //   backgroundColor: ["responsive", "hover", "focus", "group-hover"],
  //   display: ["responsive", "hover", "focus", "group-hover"],

  // },
  plugins: [],
};
