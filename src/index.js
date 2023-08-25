import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./state";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        store={store}
        // addMessage={store.addMessage.bind(store)}
        // addPost={store.addPost.bind(store)}
        // updateNewPostText={store.updateNewPostText.bind(store)}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState()); 

store.subscribe(rerenderEntireTree);
