import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from "./components/recipes/recipes";
import RecipeDetail from "./components/recipeDetail/recipeDetail";
import NavBar from "./components/layout/NavBar";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme({
    typography: {
      h1: {
        fontWeight: "500",
      },
      h6: {
        fontWeight: "600",
        fontSize: "1.15rem",
        lineHeight: "1.2",
      },
      caption1: {
        fontWeight: "600",
        fontSize: "0.8rem",
      },
      caption2: {
        fontWeight: "600",
        fontSize: "2rem",
      }
    },
    palette: {
        primary: {
            main: "#F0EDEE",
            contrastText: "#0A090C",
        },
        secondary: {
            main: "#2C666E",
            contrastText: "#FFFFFF",
        },
        info: {
            main: "#F5CAC3",
            contrastText: "#0A090C",
        },
        background: {
          default: "#F0EDEE",
          paper: "#FEFEFE",
        },
    },
});


class App extends Component {
  
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <div>
              <NavBar />
              <Routes>
                <Route path="/" element={<Recipes />} />
                <Route path="recipe/:id" element={<RecipeDetail />} />
              </Routes>
            </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}


export default App;