import React from "react";
import Messages from "./Messages";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import { StoreContext } from "../../StoreContext";

const MessagesContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const sendMessage = () => {
          store.dispatch(addMessageActionCreator());
          store.dispatch(updateNewMessageTextActionCreator(""));
        };

        const changeMessageText = (messageText) => {
          store.dispatch(updateNewMessageTextActionCreator(messageText));
        };

        return (
          <Messages
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}
            sendMessage={sendMessage}
            changeMessageText={changeMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
