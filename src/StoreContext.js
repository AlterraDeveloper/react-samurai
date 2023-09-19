import React from "react";

export const StoreContext = React.createContext(null);

export const Provider = (props) => (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
);

// export default Provider;
