import React from "react";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialogItem}>
      <img className={s.circle} src={props.dialogData.imgUrl} />
      <div className={s.dialogName}>{props.dialogData.name}</div>
    </div>
  );
};

export default DialogItem;
