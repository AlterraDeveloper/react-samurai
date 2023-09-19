import React from "react";
import DialogItem from "../DialogItem/DialogItem";
import { StoreContext } from "../../StoreContext";
import s from "./DialogsContainer.module.css";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const dialogsElements = store
          .getState()
          .dialogsPage.dialogs.map((d) => <DialogItem dialogData={d} />);

        return <div className={s.dialogsItems}>{dialogsElements}</div>;
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
