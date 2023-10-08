const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const GET_USERS = "GET_USERS";

const initialState = {
  users: [
    {
      id: 1,
      userName: "Evgeniy",
      userSurname: "Kiselev",
      userIcon: "https://randomuser.me/api/portraits/men/24.jpg",
      userLocation: {
        country: "Kyrgyzstan",
        city: "Bishkek",
      },
      userStatus: "I'm a boss",
      followed: false,

      getDisplayName() {
        return this.userName + " " + this.userSurname[0].toUpperCase() + ".";
      },
    },
    {
      id: 2,
      userName: "Vladislav",
      userSurname: "Ivanov",
      userIcon: "https://randomuser.me/api/portraits/men/28.jpg",
      userLocation: {
        country: "Kazakhstan",
        city: "Astana",
      },
      userStatus: "Let's connect",
      followed: true,
      getDisplayName() {
        return this.userName + " " + this.userSurname[0].toUpperCase() + ".";
      },
    },
  ],
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
        users: [...state.users, ...action.users],
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
