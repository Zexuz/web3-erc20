/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "6rem",
    },
    colors: {
      primary: "#2C50ED",
      secondary: "#FF3366",
      blue: {
        100: "#6C85F2",
        200: "#2942B4",
        300: "#2B2E4C",
        400: "#242D5B",
        500: "#222437",
        600: "#1C1E2F",
      },
      white: "#FFFFFF",
      gray: {
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#656673",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        bold: 700,
        semibold: 600,
        medium: 500,
        regular: 400,
        light: 300,
      },
    },
  },
  plugins: [],
};
