import { SocialNetworkAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const LOGIN_VIA_FORM = "LOGIN_VIA_FORM";
const LOGOUT = "LOGOUT";

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case LOGIN_VIA_FORM:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case LOGOUT:
      return {
        ...state,
        userId: null,
        login: null,
        email: null,
        isAuth: false,
      };
    default:
      return state;
  }
};

export const loginViaFormActionCreator = (data) => ({
  type: LOGIN_VIA_FORM,
  data,
});

export const logoutActionCreator = () => ({
  type: LOGOUT,
});

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
      }
    })
    .catch((error) => {
      console.error("Set auth user error => ", error);
    });
};

export const loginViaFormThunkCreator = (data) => (dispatch) => {
  SocialNetworkAPI.authLogin(data)
    .then((response) => {
      if (response.data.resultCode === 0) {
        const { userId } = { ...response.data.data };
        dispatch(loginViaFormActionCreator({ userId }));
        SocialNetworkAPI.getUserProfile(userId)
        .then(response => {
          dispatch(setAuthUserDataActionCreator(userId, null, response.data.fullName));
        })
      }
    })
    .catch((error) => {
      console.error("Login via form error => ", error);
    });
};

export const logoutThunkCreator = () => (dispatch) => {
  SocialNetworkAPI.authLogout()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(logoutActionCreator());
      }
    })
    .catch((error) => {
      console.error("Logout error => ", error);
    });
};
