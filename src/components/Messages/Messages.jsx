import React from "react";
import s from "./Messages.module.css";
import Message from "../Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";

const Messages = (props) => {
  const messagesElements = props.state.messages.map((m, i) => (
    <Message message={m.message} idx={i} />
  ));

  const sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
    // messageText.current.value = "";
    props.store.dispatch(updateNewMessageTextActionCreator(""));
  };

  const onMessageTextChanged = (event) => {
    props.store.dispatch(updateNewMessageTextActionCreator(event.target.value));
  };

  return (
    <div className={s.messageContainer}>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.messageForm}>
        <textarea
          value={props.state.newMessageText}
          onChange={onMessageTextChanged}
        ></textarea>
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  );
};

export default Messages;
