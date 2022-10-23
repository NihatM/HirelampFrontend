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
    backgroundColor: ["responsive", "hover", "focus", "group-hover", "active"],
    backgroundImage: ["responsive", "hover", "focus", "group-hover", "active"],
    margin: ["responsive", "hover", "active"],
    padding: ["responsive", "active"],
    borderWidth: ["responsive", "hover", "focus", "active"],
    borderColor: ["responsive", "hover", "focus", "active"],
    borderRadius: ["responsive", "hover", "focus", "active"],
    boxShadow: ["responsive", "hover", "focus", "active"],
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
      height: {
        140: "140px",
        100: "100px",
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
        "text-gray": "#7C7878",
        "notif-orange": "#FF8020",
      },
      boxShadow: {
        "3xl": "0 0px 20px -15px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        xs: "320px",
      },
      animation: ["group-hover"],
      backgroundImage: {
        "bg-top": "url('/src/assets/bgtop.svg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  // variants: {
  //   textColor: ["responsive", "hover", "focus", "group-hover"],
  //   backgroundColor: ["responsive", "hover", "focus", "group-hover"],
  //   display: ["responsive", "hover", "focus", "group-hover"],

  // },
  plugins: [require("autoprefixer")],
};
