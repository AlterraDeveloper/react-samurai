import axios from "axios";

const socialNetworkApi = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "9cebe972-9f60-4460-94e5-2d7054eec31d",
  }
});

export const SocialNetworkAPI = {
  getUsers: (currentPage = 1, pageSize = 10) =>
    socialNetworkApi
      .get("/users", {
        params: {
          page: currentPage,
          count: pageSize,
        },
      })
      .then((response) => response.data),

  authMe: () => socialNetworkApi.get("/auth/me"),

  getUserProfile: (userId) => socialNetworkApi.get(`/profile/${userId}`),

  followUser: (userId) => socialNetworkApi.post(`/follow/${userId}`, null),

  unfollowUser: (userId) => socialNetworkApi.delete(`/follow/${userId}`),
};
