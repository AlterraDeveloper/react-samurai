import React from "react";
import s from "./Dialogs.module.css";
import Message from "../Message/Message";
import DialogItem from "../DialogItem/DialogItem";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem dialogData={d} />
  ));

  const messagesElements = props.state.messages.map((m, i) => (
    <Message message={m.message} idx={i} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
