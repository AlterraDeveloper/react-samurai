import React from "react";
import s from "./Messages.module.css";
import Message from "../Message/Message";

const Messages = (props) => {
  const messagesElements = props.messages.map((m, i) => (
    <Message message={m.message} idx={i} />
  ));

  const messageText = React.createRef();

  const sendMessage = () => {
    props.store.dispatch({
      type: "ADD-MESSAGE",
      text: messageText.current.value,
    });
    messageText.current.value = "";
  };

  return (
    <div className={s.messageContainer}>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.messageForm}>
        <textarea ref={messageText}></textarea>
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  );
};

export default Messages;
