const state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 11 },
      { id: 2, message: "how are you?", likesCount: 5 },
      { id: 3, message: "Yo yo", likesCount: 2 },
      { id: 4, message: "Hi", likesCount: 33 },
    ],
  },
  dialogsPage: {
    messages: [
      { message: "qwerty" },
      { message: "qwerty 123" },
      { message: "qwerty 21321432" },
      { message: "qwerty test test" },
    ],
    dialogs: [
      { id: 1, name: "Vlad" },
      { id: 2, name: "Sveta" },
      { id: 3, name: "Lena" },
    ],
  },
};

export default state;
