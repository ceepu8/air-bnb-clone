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
        "light-gray": "var(--light-gray)",
        danger: "var(--danger)",
        green: "var(--green)",
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
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
