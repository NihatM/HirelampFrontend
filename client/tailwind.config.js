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
  purge: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  content: [],
  darkMode: false, // or 'media' or 'class'
  variants: {
    display: ["responsive", "active"],
    textColor: ["responsive", "hover", "focus", "group-hover", "active"],
    margin: ["responsive", "hover", "active"],
    padding: ["responsive", "active"],
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
    // borderWidth: ["responsive", "hover", "focus", "group-hover"],
    // borderColor: ["responsive", "hover", "focus", "group-hover"],
    // borderRadius: ["responsive", "hover", "focus", "group-hover"],
    boxShadow: ["responsive", "hover", "focus", "group-hover"],
    // opacity: ["responsive", "hover", "focus", "group-hover"],
    // animation: ["responsive", "hover", "focus", "group-hover"],
    // transitionProperty: ["responsive", "hover", "focus", "group-hover"],
    // transitionDuration: ["responsive", "hover", "focus", "group-hover"],
    // transitionTimingFunction: ["responsive", "hover", "focus", "group-hover"],
    // transitionDelay: ["responsive", "hover", "focus", "group-hover"],
    // scale: ["responsive", "hover", "focus", "group-hover"],
    // rotate: ["responsive", "hover", "focus", "group-hover"],
    // translate: ["responsive", "hover", "focus", "group-hover"],
    // skew: ["responsive", "hover", "focus", "group-hover"],
    // transformOrigin: ["responsive", "hover", "focus", "group-hover"],
    // transform: ["responsive", "hover", "focus", "group-hover"],
    // fill: ["responsive", "hover", "focus", "group-hover"],
    // stroke: ["responsive", "hover", "focus", "group-hover"],
    // strokeWidth: ["responsive", "hover", "focus", "group-hover"],
    // strokeDashoffset: ["responsive", "hover", "focus", "group-hover"],
    // strokeDasharray: ["responsive", "hover", "focus", "group-hover"],
    // strokeOpacity: ["responsive", "hover", "focus", "group-hover"],
    // fillOpacity: ["responsive", "hover", "focus", "group-hover"],
    // objectPosition: ["responsive", "hover", "focus", "group-hover"],
    // objectFit: ["responsive", "hover", "focus", "group-hover"],
  },
  theme: {
    extend: {
      width: {
        111: "111px",
        282: "282px",
        250: "250px",
        379: "379px",
        399: "399px",
        350: "350px",
        358: "358px",
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
        "custom-orange": "#FFB23B",
        "price-blue": "#D0EBFF",
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
  plugins: [
    require("autoprefixer"),
    require("@thoughtbot/tailwindcss-aria-attributes"),
    require("tw-elements/dist/plugin"),
  ],
};
