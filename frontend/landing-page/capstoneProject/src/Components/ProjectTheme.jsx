import { createTheme } from "@mui/material/styles";
// creates a new theme that overrides  any defaults

export const ProjectTheme = createTheme({
  palette: {
    primary: {
      main: "#4F7CAC",
      contrastText: "#ffffff",
      dark: "#2C5282",
    },
    secondary: { main: "#7FA38D", contrastText: "#ffffff" },
    background: { default: "#F8FAFC", paper: "#ffffff" },
  },
  text: {
    primary: "#1F2937",
    secondary: "#6B7280",
  },

  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: { color: "inherit", textDecoration: "none" }, //link inherits
      },
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
  },
});
