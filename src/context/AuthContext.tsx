import { createContext, useContext, useState } from "react";
const AuthContext = createContext({});
const AuthContextProvider = () => {
  const [dropdown, setDropdown] = useState<string>("");
  //open
  const handleShowDropdown = (modalType: string) => {
    setDropdown(modalType || "");
  };
  //close
  const handleCloseDropdown = (e: any) => {
    e?.stopPropagation();
    setDropdown("");
  };
  return { dropdown, handleShowDropdown, handleCloseDropdown };
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
