import React from "react";
import s from "./Dialogs.module.css";
import MessagesContainer from "../Messages/MessagesContainer";
import DialogsContainer from "./DialogsContainer";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <DialogsContainer />
      <MessagesContainer/>
    </div>
  );
};

export default Dialogs;
