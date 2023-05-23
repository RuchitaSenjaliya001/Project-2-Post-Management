import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModeContextProvider } from "./context/mode-context";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ModeContextProvider><App /></ModeContextProvider>
);
