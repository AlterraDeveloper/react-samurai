import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireTree = (
  state,
  addMessage,
  addPost,
  updateNewPostText
) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addMessage={addMessage}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>
  );
};
