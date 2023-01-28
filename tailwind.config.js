module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["outline-none"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        tiffany: "var(--tiffany)",
        pink: "var(--pink)",
        gray: "var(--gray)",
        "dark-gray": "var(--dark-gray)",
        "white-gray": "var(--white-gray)",
        "very-light-gray": "var(--very-light-gray)",
        "light-gray": "var(--light-gray)",
        "very-dark-gray": "var(--very-dark-gray)",
        "black-gray": "var(--black-gray)",
        danger: "var(--danger)",
        green: "var(--green)",

        "linear-100": "var(--linear-gradient-100)",
        "linear-200": "var(--linear-gradient-200)",
        "linear-button": "var(--linear-gradient-button)",
      },
      textColor: {
        main: "var(--text-main)",
        sub: "var(--text-sub)",
        gray: "var(--text-gray)",
      },
      boxShadow: {
        drop: "var(--drop-shadow)",
        bottom: "var(--bottom-shadow)",
        modal: "var(--modal-shadow)",
      },
      fontFamily: {
        san: "var(--font-sans)",
      },
      height: {
        dynamic: "calc(100vh - calc(100vh - 100%))",
        header: "var(--header-height)",
      },
      screens: {
        tiny: "321px", // iphone5
      },
      animation: {
        "slide-in": "slideIn 1s ease-in-out 1",
        "slide-out": "slideOut 1s ease-in-out 1",
      },
      keyframes: {
        slideIn: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },
        slideOut: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
