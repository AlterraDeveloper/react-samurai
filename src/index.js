import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 11 },
  { id: 2, message: "how are you?", likesCount: 5 },
  { id: 3, message: "Yo yo", likesCount: 2 },
  { id: 4, message: "Hi", likesCount: 33 },
];

const dialogs = [
  { id: 1, name: "Vlad" },
  { id: 2, name: "Sveta" },
  { id: 3, name: "Lena" },
];

const messages = [
  { message: "qwerty" },
  { message: "qwerty 123" },
  { message: "qwerty 21321432" },
  { message: "qwerty test test" },
];

root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
