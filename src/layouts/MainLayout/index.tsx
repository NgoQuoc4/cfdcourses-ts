import { Outlet } from "react-router-dom";
import AuthModal from "../../components/AuthModal";
import Footer from "../../components/Footer";
import Headers from "../../components/Headers";
import Navbar from "../../components/Navbar";
import Overlay from "../../components/Overlay";
import MainContextProvider from "../../context/MainContext";

const MainLayout = () => {
  return (
    <MainContextProvider>
      <Headers />
      <Navbar />
      <Overlay />
      <Outlet />
      <Footer />
      <AuthModal />
    </MainContextProvider>
  );
};

export default MainLayout;
