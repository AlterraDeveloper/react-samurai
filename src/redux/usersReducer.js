const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const GET_USERS = "GET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
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
