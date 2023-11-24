import { getRandomIntInRange } from "../helpers";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
  userProfile: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
        imgUrl: state.userProfile?.photos.small ??
         `https://randomuser.me/api/portraits/men/${getRandomIntInRange(
          1,
          99
        )}.jpg`,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setUserProfileActionCreator = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});
