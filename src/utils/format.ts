import moment from "moment";
import { TIME_DISPLAYS } from "../constants/format-date";

export const formatCurrentcy = (data: number, type = "vi-VN") => {
  if (!data) return 0;
  return data.toLocaleString(type);
};

export const formatDate = (data: number, format = TIME_DISPLAYS.DATE) => {
  if (!data) return "";
  return moment(data).format(format);
};
