import { Outlet } from "react-router-dom";
import PATHS from "../../constants/paths";

const PrivateRoute = ({ redirectPath = PATHS.HOME }) => {
  return <Outlet />;
};

export default PrivateRoute;
