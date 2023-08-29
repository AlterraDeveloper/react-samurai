const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
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
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: 5,
        message: state.newPostText,
        likesCount: 0,
        imgUrl: "https://randomuser.me/api/portraits/men/65.jpg",
      });
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});