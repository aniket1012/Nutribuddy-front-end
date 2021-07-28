import { createTheme } from "@material-ui/core/styles";

const darkGrey = "#303841";
const lightGrey = "#3A4750";
const blue = "#00ADB5";
const ivory = "#EEEEEE";


export default createTheme({
  palette: {
    common: {
      darkGrey: `${darkGrey}`,
      lightGrey: `${lightGrey}`,
      blue: `${blue}`,
      ivory: `${ivory}`,
    },
    primary: {
      main: `${darkGrey}`,
    },
    secondary: {
      main: `${lightGrey}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
  },
});
