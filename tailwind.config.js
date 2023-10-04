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
      green: {
        100: "#D4EAD4", // lightest
        200: "#A9D5A9",
        300: "#7EC07E",
        400: "#53AB53",
        500: "#299629", // standard
        600: "#248124",
        700: "#1F6C1F",
        800: "#195719",
        900: "#134313", // darkest
      },
      red: {
        100: "#FFD4D8", // lightest
        200: "#FFA9B0",
        300: "#FF7E88",
        400: "#FF5360",
        500: "#FF2962", // standard
        600: "#E52559",
        700: "#CC214F",
        800: "#A31D45",
        900: "#79183A", // darkest
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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        "@keyframes spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        ".loader": {
          border: "4px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "50%",
          borderTop: "4px solid #fff",
          width: "24px",
          height: "24px",
          animation: "spin 1s linear infinite",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
