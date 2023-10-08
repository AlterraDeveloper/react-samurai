import React from "react";
import s from "./Message.module.css";
import { getRandomIntInRange } from "../../helpers";

const Message = (props) => {

  const idx = getRandomIntInRange(0, 100);
  const classes = [s.message, idx % 2 ? s.my : s.other].join(" ");

  return <div className={classes}>{props.message}</div>;
};

export default Message;
