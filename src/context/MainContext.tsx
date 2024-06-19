import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";

const MainContext = createContext({});

const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation(); //get URL of page
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  //scroll to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setIsShowNavbar(false);
  }, [pathname]);
  const handleShowNavbar = (isShow: boolean) => {
    setIsShowNavbar(isShow);
  };
  return (
    <MainContext.Provider value={{ isShowNavbar, handleShowNavbar }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

export const useMainContext = () => useContext(MainContext);
