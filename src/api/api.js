import axios from "axios";

const socialNetworkApi = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        "API-KEY": "9cebe972-9f60-4460-94e5-2d7054eec31d",
    },
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

    followUser: (userId) => socialNetworkApi.post(`/follow/${userId}`, null),

    unfollowUser: (userId) => socialNetworkApi.delete(`/follow/${userId}`),

    getUserProfile: (userId) => socialNetworkApi.get(`/profile/${userId}`),

    updateUserProfile: (userProfile) => socialNetworkApi.put(`/profile`, userProfile),

    uploadUserProfilePhoto: (photo) => {
        const formData = new FormData();
        formData.append("image", photo);
        return socialNetworkApi.put("/profile/photo", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    },

    getUserProfileStatus: (userId) =>
        socialNetworkApi.get(`/profile/status/${userId}`),

    updateUserProfileStatus: (statusMessage) =>
        socialNetworkApi.put("/profile/status", {
            status: statusMessage.slice(0, 300),
        }),

    authLogin: (data) => socialNetworkApi.post("auth/login", {
        email: data.login,
        password: data.password,
        rememberMe: data.rememberMe,
        captcha: false
    }),

    authLogout: () => socialNetworkApi.delete("auth/login")
};