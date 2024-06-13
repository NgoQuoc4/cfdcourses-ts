import axiosInstance from "../utils/axiosInstance";

export const subscribesService = {
  getSubscribes(payload = {}) {
    return axiosInstance.post(`/subscribes`, payload);
  },
};
