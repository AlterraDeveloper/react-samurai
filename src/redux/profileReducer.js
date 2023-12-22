import { getRandomIntInRange } from "../helpers";
import { SocialNetworkAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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
  userProfile: null,
  status: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
        imgUrl:
          state.userProfile?.photos.small ??
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
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfileActionCreator = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});

export const setStatusActionCreator = (status) => ({
  type: SET_STATUS,
  status,
});

export const setUserProfileThunkCreator = (userId) => (dispatch) => {
  SocialNetworkAPI.getUserProfile(userId)
    .then((response) => {
      dispatch(setUserProfileActionCreator(response.data));
    })
    .catch((error) => {
      console.error("Get user profile error => ", error);
    });
};

export const setStatusThunkCreator = (status) => (dispatch) => {
  SocialNetworkAPI.updateUserProfileStatus(status)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatusActionCreator(status));
      }
    })
    .catch((error) => {
      console.error("Update status error => ", error);
    });
};

export const getStatusThunkCreator = (userId) => (dispatch) => {
  SocialNetworkAPI.getUserProfileStatus(userId)
    .then((response) => {
      dispatch(setStatusActionCreator(response.data));
    })
    .catch((error) => {
      console.error("Get status error => ", error);
    });
};
