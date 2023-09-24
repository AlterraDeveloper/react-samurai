const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
  messages: [
    { message: "qwerty" },
    { message: "qwerty 123" },
    { message: "qwerty 21321432" },
    { message: "qwerty test test" },
    { message: "Hello" },
    { message: "Hello" },
    { message: "How are you?" },
    { message: "Fine, thanks" },
  ],
  newMessageText: "",

  dialogs: [
    {
      id: 1,
      name: "Vlad",
      imgUrl: "https://randomuser.me/api/portraits/men/73.jpg",
    },
    {
      id: 2,
      name: "Sveta",
      imgUrl: "https://randomuser.me/api/portraits/women/73.jpg",
    },
    {
      id: 3,
      name: "Lena",
      imgUrl: "https://randomuser.me/api/portraits/women/37.jpg",
    },
    {
      id: 4,
      name: "Petr",
      imgUrl: "https://randomuser.me/api/portraits/men/8.jpg",
    },
  ],
};

export const dialogsReducer = (state = initialState, action) => {

  const stateCopy = structuredClone(state);

  switch (action.type) {
    case ADD_MESSAGE:
      if (!state.newMessageText) return state;

      stateCopy.messages.push({
        message: state.newMessageText,
      });
      return stateCopy;
    case UPDATE_NEW_MESSAGE_TEXT:
      stateCopy.newMessageText = action.newMessageText;
      return stateCopy;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text,
});
