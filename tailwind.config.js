/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      spacing: {
        "4.5":"18px"
      },

      screens: {
        "2xs": "375px",
        xs: "425px",
        sm: "640px",
        md: "768px",
        lg: "1240px",
        xl: "1280px",
        "2xl": "1536px"
      },

      height: {
        "24" : "500px"
      }
    },
  },
  plugins: [],
}

