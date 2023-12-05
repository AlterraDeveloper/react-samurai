import { SocialNetworkAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_IS_USERS_LOADING = "SET_IS_USERS_LOADING";
const SET_FOLLOWINGS_IN_PROGRESS = "SET_FOLLOWINGS_IN_PROGRESS";

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
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
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
      return { ...state, followingsInProgress: newFollowingsInProgress };
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

export const setUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
  dispatch(setIsUsersLoadingActionCreator(true));

  SocialNetworkAPI.getUsers(currentPage, pageSize)
    .then((data) => {
      const apiUsers = data.items;
      dispatch(
        setUsersActionCreator(
          apiUsers.map((user) => ({
            id: user.id,
            userName: user.name,
            userIcon: user.photos.small,
            userStatus: user.status,
            followed: user.followed,
          }))
        )
      );
      dispatch(setTotalUsersCountActionCreator(data.totalCount));
    })
    .catch((error) => {
      console.error("Get users error => ", error);
    })
    .finally(() => {
      dispatch(setIsUsersLoadingActionCreator(false));
    });
};

export const unfollowUserThunkCreator = (userId) => (dispatch) => {
  dispatch(setFollowingsInProgressActionCreator(userId));
  SocialNetworkAPI.unfollowUser(userId)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowActionCreator(userId));
      }
    })
    .catch((error) => {
      console.error("Unfollow user error => ", error);
    })
    .finally(() => {
      dispatch(setFollowingsInProgressActionCreator(userId));
    });
};



export const followUserThunkCreator = (userId) => (dispatch) => {
  dispatch(setFollowingsInProgressActionCreator(userId));
  SocialNetworkAPI.followUser(userId)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followActionCreator(userId));
      }
    })
    .catch((error) => {
      console.error("Follow user error => ", error);
    })
    .finally(() => {
      dispatch(setFollowingsInProgressActionCreator(userId));
    });
};
