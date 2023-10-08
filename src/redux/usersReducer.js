const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const GET_USERS = "GET_USERS";

const initialState = {
  users: []
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
