import { SocialNetworkAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  userId: null,
  login: null,
  email: null,
  isFetching: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setAuthUserDataActionCreator = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  },
});

export const setAuthUserDataThunkCreator = () => (dispatch) => {
  SocialNetworkAPI.authMe()
    .then((response) => {
      if (response.data.resultCode === 0) {
        const { id: userId, login, email } = { ...response.data.data };
        dispatch(setAuthUserDataActionCreator(userId, email, login));
      } else {
        dispatch(setAuthUserDataActionCreator(30452, null, "Eugene"));
      }
    })
    .catch((error) => {
      console.error("Set auth user error => ", error);
    });
};
