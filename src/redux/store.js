import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Hi, how are you?",
          likesCount: 11,
          imgUrl: "https://randomuser.me/api/portraits/men/73.jpg",
        },
        {
          id: 2,
          message: "how are you?",
          likesCount: 5,
          imgUrl: "https://randomuser.me/api/portraits/men/73.jpg",
        },
        {
          id: 3,
          message: "Yo yo",
          likesCount: 2,
          imgUrl: "https://randomuser.me/api/portraits/men/73.jpg",
        },
        {
          id: 4,
          message: "Hi",
          likesCount: 33,
          imgUrl: "https://randomuser.me/api/portraits/men/73.jpg",
        },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
  },
  getState() {
    return this._state;
  },
  _callSubsciber() {
    console.log("State changed");
  },
  subscribe(observer) {
    this._callSubsciber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubsciber(this._state);
  },
};

export default store;
window.store = store;
