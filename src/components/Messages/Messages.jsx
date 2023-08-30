import React from "react";
import s from "./Messages.module.css";
import Message from "../Message/Message";

const Messages = (props) => {
  const messagesElements = props.messages.map((m, i) => (
    <Message message={m.message} idx={i} />
  ));

  const onSendMessage = () => {
    props.sendMessage();
    props.changeMessageText("");
  };

  const onMessageTextChanged = (event) => {
    props.changeMessageText(event.target.value);
  };

  return (
    <div className={s.messageContainer}>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.messageForm}>
        <textarea
          value={props.newMessageText}
          onChange={onMessageTextChanged}
        ></textarea>
        <button onClick={onSendMessage}>Send message</button>
      </div>
    </div>
  );
};

export default Messages;
