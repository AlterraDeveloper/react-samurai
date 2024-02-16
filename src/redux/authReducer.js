import {SocialNetworkAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const LOGIN_VIA_FORM = "samurai-network/auth/LOGIN_VIA_FORM";
const LOGOUT = "samurai-network/auth/LOGOUT";
const SET_CAPTCHA = "samurai-network/auth/SET_CAPTCHA";

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
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
        case SET_CAPTCHA:
            return {
                ...state,
                captchaUrl: action.captchaUrl
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

export const setCaptchaActionCreator = (captchaUrl) => ({
    type: SET_CAPTCHA,
    captchaUrl: captchaUrl
})

export const setAuthUserDataThunkCreator = () => async (dispatch) => {
    const response = await SocialNetworkAPI.authMe();
    if (response.data.resultCode === 0) {
        const {id: userId, login, email} = {...response.data.data};
        dispatch(setAuthUserDataActionCreator(userId, email, login));
    }
};

export const loginViaFormThunkCreator = (data) => async (dispatch) => {
    const authResponse = await SocialNetworkAPI.authLogin(data);
    if (authResponse.data.resultCode === 0) {
        const {userId} = {...authResponse.data.data};
        dispatch(loginViaFormActionCreator({userId}));
        const userProfileResponse = await SocialNetworkAPI.getUserProfile(userId)
        dispatch(setAuthUserDataActionCreator(userId, null, userProfileResponse.data.fullName));
    } else if (authResponse.data.resultCode === 10) {
        dispatch(setCaptchaThunkCreator())
    } else {
        dispatch(stopSubmit("login", {
            _error: authResponse.data.messages.length ? authResponse.data.messages[0] : "Something went wrong"
        }));
    }
};

export const logoutThunkCreator = () => async (dispatch) => {
    const logoutResponse = await SocialNetworkAPI.authLogout();
    if (logoutResponse.data.resultCode === 0) {
        dispatch(logoutActionCreator());
    }
};

export const setCaptchaThunkCreator = () => async (dispatch) => {
    const response  = await SocialNetworkAPI.getCaptcha();
    dispatch(setCaptchaActionCreator(response.data.url));
}
