import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import "./App.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: '"Marcellus", serif',
  },
  palette: {
    text: {
      primary: '#ffffff',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Headermain />
          <AppRoutes />
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}