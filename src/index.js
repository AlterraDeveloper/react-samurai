import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/reduxStore";
import { Provider } from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      {/* <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider> */}

      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});
