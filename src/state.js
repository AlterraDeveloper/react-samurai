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
      { message: "Hello" },
      { message: "Hello" },
      { message: "How are you?" },
      { message: "Fine, thanks" },

    ],
    dialogs: [
      { id: 1, name: "Vlad" , imgUrl:'https://randomuser.me/api/portraits/men/73.jpg'},
      { id: 2, name: "Sveta", imgUrl: 'https://randomuser.me/api/portraits/women/73.jpg' },
      { id: 3, name: "Lena" , imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg'},
      { id: 4, name: "Petr" , imgUrl: 'https://randomuser.me/api/portraits/men/8.jpg'},
    ],
  },
};

export default state;
