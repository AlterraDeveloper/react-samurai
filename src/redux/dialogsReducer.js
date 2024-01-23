import { getRandomIntInRange } from "../helpers";

const ADD_MESSAGE = "samurai-network/dialogs/ADD-MESSAGE";

const initialState = {
  messages: [
    { message: "qwerty", isMine: getRandomIntInRange(0, 2) },
    { message: "qwerty 123", isMine: getRandomIntInRange(0, 2) },
    { message: "qwerty 21321432", isMine: getRandomIntInRange(0, 2) },
    { message: "qwerty test test", isMine: getRandomIntInRange(0, 2) },
    { message: "Hello", isMine: getRandomIntInRange(0, 2) },
    { message: "Hello", isMine: getRandomIntInRange(0, 2) },
    { message: "How are you?", isMine: getRandomIntInRange(0, 2) },
    { message: "Fine, thanks", isMine: getRandomIntInRange(0, 2) },
  ],

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
  switch (action.type) {
    case ADD_MESSAGE:
      if (!action.newMessageText) return state;

      const newMessage = {
        message: action.newMessageText,
        isMine: getRandomIntInRange(0, 2),
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageText) => ({
  type: ADD_MESSAGE,
  newMessageText,
});
