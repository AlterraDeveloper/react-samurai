import {getRandomIntInRange} from "../helpers";
import {SocialNetworkAPI} from "../api/api";

const ADD_POST = "samurai-network/profile/ADD-POST";
const DELETE_POST = "samurai-network/profile/DELETE-POST";
const SET_USER_PROFILE = "samurai-network/profile/SET_USER_PROFILE";
const UPDATE_USER_PROFILE = "samurai-network/profile/UPDATE_USER_PROFILE";
const SET_USER_PROFILE_PHOTO = "samurai-network/profile/SET_USER_PROFILE_PHOTO";
const SET_STATUS = "samurai-network/profile/SET_STATUS";

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
                    state.userProfile?.photos.large ??
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
        case UPDATE_USER_PROFILE:
            return {
                ...state,
                userProfile: {...state.userProfile, ...action.userProfile},
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        case SET_USER_PROFILE_PHOTO:
            return {
                ...state,
                userProfile: {...state.userProfile, ...action.photos}
            }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText,
});

export const deletePostActionCreator = (postId) => ({
    type: DELETE_POST,
    postId,
});

export const setUserProfileActionCreator = (userProfile) => ({
    type: SET_USER_PROFILE,
    userProfile,
});

export const updateUserProfileActionCreator = (userProfile) => ({
    type: UPDATE_USER_PROFILE,
    userProfile,
});

export const setUserProfilePhotoActionCreator = (photos) => ({
    type: SET_USER_PROFILE_PHOTO,
    photos: photos.data,
});

export const setStatusActionCreator = (status) => ({
    type: SET_STATUS,
    status,
});

export const setUserProfileThunkCreator = (userId) => async (dispatch) => {
    const response = await SocialNetworkAPI.getUserProfile(userId);
    dispatch(setUserProfileActionCreator(response.data));
};

export const updateUserProfileThunkCreator = (userProfile) => async (dispatch) => {
    const response = await SocialNetworkAPI.updateUserProfile(userProfile);
    if(response.data.resultCode === 0){
        dispatch(updateUserProfileActionCreator(response.data));
    }
};


export const setStatusThunkCreator = (status) => async (dispatch) => {
    const response = await SocialNetworkAPI.updateUserProfileStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatusActionCreator(status));
    }
};

export const getStatusThunkCreator = (userId) => async (dispatch) => {
    const response = SocialNetworkAPI.getUserProfileStatus(userId);
    dispatch(setStatusActionCreator(response.data));
};

export const uploadProfilePhotoThunkCreator = (photo) => async (dispatch) => {
    const response = await SocialNetworkAPI.uploadUserProfilePhoto(photo);
    dispatch(setUserProfilePhotoActionCreator(response.data));
};
