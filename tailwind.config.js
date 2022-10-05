/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: true,
  },
  theme: {
    backgroundColor: {
      pink: "var(--pink)",
      white: "var(--white)",
      grey: "var(--grey)",
      black: "var(--black)",
      lightGrey: "var(--light-grey)",
      medGrey: "var(--med-grey)",
      red: "var(--red)",
    },
    textColor: {
      pink: "var(--pink)",
      white: "var(--white)",
      grey: "var(--grey)",
      black: "var(--black)",
      lightGrey: "var(--light-grey)",
      medGrey: "var(--med-grey)",
    },
    borderColor: {
      pink: "var(--pink)",
      white: "var(--white)",
      grey: "var(--grey)",
      black: "var(--black)",
      lightGrey: "var(--light-grey)",
      medGrey: "var(--med-grey)",
    },
    extend: {
      fontFamily: {
        roboto: "var(--font-sans)",
      },
      screens: {
        "m-s": { max: "375px" },
        "m-xs": { max: "744px" },
        "m-md": { max: "950px" },
        "m-lg": { max: "1128px" },
        "m-xl": { max: "1440px" },
      },
    },
  },
  plugins: [],
};
