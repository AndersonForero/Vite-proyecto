import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { TaskContextProvider } from "./context/TaskContext";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </TaskContextProvider>
  </StrictMode>
);
