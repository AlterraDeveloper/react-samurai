import React from "react";
import Messages from "./Messages";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";

const MessagesContainer = (props) => {

const state = props.store.getState();

  const sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
    props.store.dispatch(updateNewMessageTextActionCreator(""));
  };

  const changeMessageText = (messageText) => {
    props.store.dispatch(updateNewMessageTextActionCreator(messageText));
  };

  return (
    <Messages messages={state.dialogsPage.messages} newMessageText={state.dialogsPage.newMessageText} sendMessage={sendMessage} changeMessageText={changeMessageText}/>
  );
};

export default MessagesContainer;
