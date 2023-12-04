const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const GET_USERS = "GET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_IS_USERS_LOADING = "SET_IS_USERS_LOADING";
const SET_FOLLOWINGS_IN_PROGRESS = "SET_FOLLOWINGS_IN_PROGRESS";

const initialState = {
  users: [],
  pageSize: 10,
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
    case GET_USERS:
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

export const getUsersActionCreator = (users) => ({
  type: GET_USERS,
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
