import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  addMessage,
  addPost,
  state,
  subscribe,
  updateNewPostText,
} from "./state";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
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

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
