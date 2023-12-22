import React from "react";
import s from "./Messages.module.css";
import Message from "../Message/Message";
import MessageForm from "./MessageForm";

const Messages = (props) => {
  const messagesElements = props.messages.map((m, idx) => (
    <Message message={m} key={idx} />
  ));

  const sendMessage = (data) => {
    props.sendMessage(data.newMessageText);
  };


  return (
    <div className={s.messageContainer}>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.messageForm}>
        <MessageForm onSubmit={sendMessage} />
      </div>
    </div>
  );
};

export default Messages;
