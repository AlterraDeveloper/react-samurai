import axios from "axios";

const socialNetworkApi = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
});

export const getUsers = (currentPage = 1, pageSize = 10) =>
  socialNetworkApi
    .get("/users", {
      params: {
        page: currentPage,
        count: pageSize,
      },
    })
    .then((response) => response.data);

export const authMe = () => socialNetworkApi.get("/authMe");

export const getUserProfile = (userId) =>
  socialNetworkApi.get(`/profile/${userId}`);

export const followUser = (userId) =>
  socialNetworkApi.post(`/follow/${userId}`, null);

export const unfollowUser = (userId) =>
  socialNetworkApi.delete(`/follow/${userId}`);
