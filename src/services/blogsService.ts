import axiosInstance from "../utils/axiosInstance";

export const blogsService = {
  getBlog(query = "") {
    return axiosInstance.get(`/blogs${query}`);
  },
  getBlogsSlug(slug = "") {
    return axiosInstance.get(`/blogs/${slug}`);
  },
  getBlogsByCategory(query = "") {
    return axiosInstance.get(`/blog-categories${query}`);
  },
};
