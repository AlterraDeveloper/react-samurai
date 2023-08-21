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
      newPostText: "eugene kiselev",
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
  addPost() {
    debugger;
    this._state.profilePage.posts.push({
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
      imgUrl: "https://randomuser.me/api/portraits/men/65.jpg",
    });
    this._state.profilePage.newPostText = "";
    this._callSubsciber(this._state);
  },
  addMessage(text) {
    this._state.dialogsPage.messages.push({ message: text });
    this._callSubsciber(this._state);
  },
  updateNewPostText(newText) {
    debugger;
    this._state.profilePage.newPostText = newText;
    this._callSubsciber(this._state);
  },
  subscribe(observer) {
    this._callSubsciber = observer;
  },
};

export default store;
window.store = store;
