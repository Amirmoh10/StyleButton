import React from "react";
import { StyleSheet, css } from "aphrodite";
import Radium from "radium";
import avatar from "./avatar.jpg";
import "./App.css";

const appStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "95vh",
  background:
    "linear-gradient(to right, #000428, #004e92)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  clipPath: "polygon(0 0, 100% 0, 100% 75vh, 0 100%)",
  "@media (max-width: 700px)": {
    height: "95vh",
    fontSize: "8px",
    letterSpacing: "2px",
  },
};


const titleStyle = {
  marginTop:"200px",
  paddingBottom:"3rem",
  color:"white",
  letterSpacing: "5px",
   
}

const buttonStyle = StyleSheet.create({
  buttonStyle: {
    position: "relative",
    padding: "15px 60px",
    backgroundColor: "white",
    textTransform: "uppercase",
    outline: "none",
    textDecoration: "none",
    border: "1px solid white",
    borderRadius:"100px",
    color: "#000428",
    overflow: "hidden",
    boxShadow: "0 1.5rem 4rem rgba(0, 0, 0, 0.671)",
    ":hover": {
      backgroundColor:"#000428",
      color:"white",
      boxShadow: "1px 1px 25px 10px rgba(0, 0, 0, 0.671) ",
    },
    ":before": {
      content: '" "',
      position: "absolute",
      height: "100%",
      width: "100%",
      top: 0,
      left: "-100%",
      transition: "0.8s",
    },
    ":hover:before": {
      left: "100%",
      backgroundImage: "linear-gradient(120deg,transparent,white,transparent)",
    },
  },
});

function App() {
  return (
    <div style={appStyle}>
      <h1 style={titleStyle}>Style React Components</h1>
      <button className={css(buttonStyle.buttonStyle)}>Button</button>
    </div>
  );
}

export default Radium(App);
