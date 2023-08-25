import React from "react";
import s from "./Dialogs.module.css";
import Messages from "../Messages/Messages";
import DialogItem from "../DialogItem/DialogItem";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem dialogData={d} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <Messages messages={props.state.messages} store={props.store}/>
    </div>
  );
};

export default Dialogs;
