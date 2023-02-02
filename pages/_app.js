import "../styles/global.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
