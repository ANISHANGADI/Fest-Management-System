import React from "react";
import { Fragment } from "react";
import RegPageNavbar from "../Components/RegPageNavbar";
import RegisterPageComponent from "../Components/RegisterPageComponent";
import registerPageStyle from "../styles/Register.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { Button } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});



const register = () => {
  //GET REQUEST
  // const fetchData = async () => {
  //   const response = await fetch("./api/register");
  //   const data = await response.json();
  //   setYo(data);
  //   console.log(data.name);
  // };


  
  return (
    <Fragment>
      <section id={registerPageStyle.registerSection}>
        <RegPageNavbar />
        <ThemeProvider theme={darkTheme}>
          <RegisterPageComponent />
        </ThemeProvider>
      </section>
    </Fragment>
  );
};

export default register;
