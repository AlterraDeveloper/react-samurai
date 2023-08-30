import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "../DialogItem/DialogItem";
import MessagesContainer from "../Messages/MessagesContainer";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem dialogData={d} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <MessagesContainer store={props.store}/>
    </div>
  );
};

export default Dialogs;
