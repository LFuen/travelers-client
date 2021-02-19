import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/components/App/App";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/TravelersContext";

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
