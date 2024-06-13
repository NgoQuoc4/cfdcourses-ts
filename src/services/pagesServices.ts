import axiosInstance from "../utils/axiosInstance";

export const pagesServices = {
  getPageByName(name, query = "") {
    return axiosInstance.get(`/pages/${name}${query}`);
  },
};
