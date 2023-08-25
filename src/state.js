const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
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
    debugger;
    if (action.type === ADD_POST) {
      this._state.profilePage.posts.push({
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
        imgUrl: "https://randomuser.me/api/portraits/men/65.jpg",
      });
      this._state.profilePage.newPostText = "";
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
    } else if (action.type === ADD_MESSAGE) {
      this._state.dialogsPage.messages.push({ 
        message: this._state.dialogsPage.newMessageText 
      });
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessageText;
    }

    this._callSubsciber(this._state);
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE
});

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text,
});

export default store;
window.store = store;
