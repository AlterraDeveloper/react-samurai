import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// setInterval(() => {
//   store.dispatch({type: "FAKE"})
// }, 1000);

// const rerenderEntireTree = () => {
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// };

// rerenderEntireTree();
