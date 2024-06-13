import { STORAGE } from "../constants/storage";
import Cookies from "js-cookie";
// Local Token
// export const localToken = {
//   get: (): any => {
//     const value = localStorage.getItem(STORAGE.token);
//     return value ? JSON.parse(value) : null;
//   },
//   set: (token: any) =>
//     localStorage.setItem(STORAGE.token, JSON.stringify(token)),
//   remove: () => localStorage.removeItem(STORAGE.token),
// };
// Coolie Token
export const cookieToken = {
  get: (): any =>
    JSON.parse(
      Cookies.get(STORAGE.token) !== undefined
        ? Cookies.get(STORAGE.token)
        : null
    ),

  set: (token: any) => {
    if (token) {
      Cookies.set(STORAGE.token, JSON.stringify(token));
    } else {
      console.error("Token is undefined or null");
    }
  },

  remove: () => Cookies.remove(STORAGE.token),
};

const tokenMethod = {
  get: () => {
    // return localToken.get();
    return cookieToken.get();
  },
  set: (token: any) => {
    // return localToken.set(token);
    return cookieToken.set(token);
  },
  remove: () => {
    // return localToken.remove();
    return cookieToken.remove();
  },
};

export default tokenMethod;
