import {SocialNetworkAPI} from "../api/api";

const FOLLOW = "samurai-network/users/FOLLOW";
const UNFOLLOW = "samurai-network/users/UNFOLLOW";
const SET_USERS = "samurai-network/users/SET_USERS";
const SET_PAGE = "samurai-network/users/SET_PAGE";
const SET_TOTAL_USERS_COUNT = "samurai-network/users/SET_TOTAL_USERS_COUNT";
const SET_IS_USERS_LOADING = "samurai-network/users/SET_IS_USERS_LOADING";
const SET_FOLLOWINGS_IN_PROGRESS = "samurai-network/users/SET_FOLLOWINGS_IN_PROGRESS";

const initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isUsersLoading: false,
    followingsInProgress: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            };
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.page,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count,
            };
        case SET_IS_USERS_LOADING:
            return {
                ...state,
                isUsersLoading: action.isLoading,
            };
        case SET_FOLLOWINGS_IN_PROGRESS:
            let newFollowingsInProgress;
            if (state.followingsInProgress.includes(action.userId)) {
                newFollowingsInProgress = state.followingsInProgress.filter(
                    (id) => id !== action.userId
                );
            } else {
                newFollowingsInProgress = state.followingsInProgress.concat(
                    action.userId
                );
            }
            return {...state, followingsInProgress: newFollowingsInProgress};
        default:
            return state;
    }
};

export const followActionCreator = (userId) => ({
    type: FOLLOW,
    userId,
});

export const unfollowActionCreator = (userId) => ({
    type: UNFOLLOW,
    userId,
});

export const setUsersActionCreator = (users) => ({
    type: SET_USERS,
    users,
});

export const setPageActionCreator = (page) => ({
    type: SET_PAGE,
    page,
});

export const setTotalUsersCountActionCreator = (count) => ({
    type: SET_TOTAL_USERS_COUNT,
    count,
});

export const setIsUsersLoadingActionCreator = (isLoading) => ({
    type: SET_IS_USERS_LOADING,
    isLoading,
});

export const setFollowingsInProgressActionCreator = (userId) => ({
    type: SET_FOLLOWINGS_IN_PROGRESS,
    userId,
});

export const setUsersThunkCreator = (page, pageSize) => async (dispatch) => {
    dispatch(setIsUsersLoadingActionCreator(true));

    const response = await SocialNetworkAPI.getUsers(page, pageSize);
    const apiUsers = response.items;
    dispatch(
        setUsersActionCreator(
            apiUsers.map((user) => ({
                id: user.id,
                userName: user.name,
                userIcon: user.photos.large,
                userStatus: user.status,
                followed: user.followed,
            }))
        )
    );
    dispatch(setTotalUsersCountActionCreator(response.totalCount));
    dispatch(setIsUsersLoadingActionCreator(false));
};

export const unfollowUserThunkCreator = (userId) => async (dispatch) => {
    dispatch(setFollowingsInProgressActionCreator(userId));
    const response = await SocialNetworkAPI.unfollowUser(userId);
    if (response.data.resultCode === 0) {
        dispatch(unfollowActionCreator(userId));
    }
    dispatch(setFollowingsInProgressActionCreator(userId));
};


export const followUserThunkCreator = (userId) => async (dispatch) => {
    dispatch(setFollowingsInProgressActionCreator(userId));
    const response = await SocialNetworkAPI.followUser(userId);
    if (response.data.resultCode === 0) {
        dispatch(followActionCreator(userId));
    }
    dispatch(setFollowingsInProgressActionCreator(userId));
};
