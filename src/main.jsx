import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
//import { PersistGate } from "redux-persist/integration/react";
import { store } from "./components/Theme/reduxThemes/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
