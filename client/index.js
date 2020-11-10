import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app"

const placeToMount = document.getElementById("app");

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, placeToMount);
});
