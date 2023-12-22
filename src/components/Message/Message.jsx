import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  const classes = [s.message, props.message.isMine ? s.my : s.other].join(" ");

  return <div className={classes}>{props.message.message}</div>;
};

export default Message;
