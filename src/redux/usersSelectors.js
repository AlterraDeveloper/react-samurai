export const getUsers = (state) => {
  return state.usersPage.users;
};

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsUserLoading = (state) => {
  return state.usersPage.isUsersLoading;
};

export const getFollowingsInProgress = (state) => {
  return state.usersPage.followingsInProgress;
};
