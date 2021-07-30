import { createTheme } from "@material-ui/core/styles";

const darkGrey = "#303841";
const lightGrey = "#3A4750";
const blue = "#00ADB5";
const ivory = "#EEEEEE";
const lightGreen = "#28FFBF";


export default createTheme({
  palette: {
    common: {
      darkGrey: `${darkGrey}`,
      lightGrey: `${lightGrey}`,
      blue: `${blue}`,
      ivory: `${ivory}`,
      lightGreen: `${lightGreen}`,
    },
    primary: {
      main: `${darkGrey}`,
    },
    secondary: {
      main: `${lightGreen}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    signUp: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: lightGrey
    },
  },
});
