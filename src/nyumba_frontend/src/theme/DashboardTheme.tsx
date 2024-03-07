import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  colorSchemes: {
      
    dark: {
      palette: {
        primary: {
          50: "#F0F7F3",
          100: "#D1E8D4",
          200: "#ABCFAA",
          300: "#7DAF7B",
          400: "#558E54",
          500: "#3B6F3B",
          600: "#345F34",
          700: "#2A4F2A",
          800: "#204020",
          900: "#163016",
        },
      },
    },
    light: {
      palette: {
        primary: {
          50: "#F0F7F3",
          100: "#D1E8D4",
          200: "#ABCFAA",
          300: "#7DAF7B",
          400: "#558E54",
          500: "#3B6F3B",
          600: "#345F34",
          700: "#2A4F2A",
          800: "#204020",
          900: "#163016",
        },
      },
    },
  },
});

export default theme;
