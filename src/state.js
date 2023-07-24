import { rerenderEntireTree } from "./render";

const state = {
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
};

const addMessage = (text) => {
  state.dialogsPage.messages.push({ message: text });
  rerenderInterface();
};

const addPost = () => {
  state.profilePage.posts.push({
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
    imgUrl: "https://randomuser.me/api/portraits/men/65.jpg",
  });
  state.profilePage.newPostText = "";
  rerenderInterface();
};

const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderInterface();
};

const rerenderInterface = () => {
  rerenderEntireTree(state, addMessage, addPost, updateNewPostText);
};

export { state, addMessage, addPost, updateNewPostText };
