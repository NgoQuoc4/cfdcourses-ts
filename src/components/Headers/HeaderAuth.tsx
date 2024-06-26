import { Link, useNavigate } from "react-router-dom";
import PATHS from "../../constants/paths";
import { useEffect, useState } from "react";
import { MODAL_TYPES } from "../../constants/general";
import { useDispatch, useSelector } from "react-redux";
import tokenMethod from "../../utils/token";
import {
  handleGetProfile,
  handleLogout,
  handleShowModal,
} from "../../store/reducers/authReducer";

const HeaderAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.auth);
  // const { dropdown, handleShowDropdown, handleCloseDropdown } =
  //   useAuthContext();
  console.log("profile", profile);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  useEffect(() => {
    dispatch(handleGetProfile() as any);
    document.addEventListener("click", () => setShowDropdown(false));
    return () => {
      document.removeEventListener("click", () => setShowDropdown(false));
    };
  }, []);

  const _onShowDropdown = (e: any) => {
    e?.stopPropagation();
    setShowDropdown(true);
  };

  const _onShowModal = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    type: string
  ) => {
    e?.preventDefault();
    e?.stopPropagation();
    dispatch(handleShowModal(type));
  };

  const _onLogout = () => {
    dispatch(handleLogout());
    navigate(PATHS.HOME);
  };

  const { firstName, lastName, profileImage, email } = profile || {};
  const name = firstName + " " + lastName;

  return (
    <>
      {!tokenMethod.get() ? (
        <>
          <div className="header__auth">
            <a
              href="#"
              className="btn btn--transparent btnmodal"
              onClick={(e) => _onShowModal(e, MODAL_TYPES.register)}
            >
              Đăng ký /&nbsp;
            </a>
            <a
              href="#"
              className="btn btn--transparent btnmodal"
              onClick={(e) => _onShowModal(e, MODAL_TYPES.login)}
            >
              Đăng nhập
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="header__logged">
            <div className="userlogged">
              <div
                className="userlogged__avatar user"
                data-dropdown="userlogged__dropdown"
                onClick={_onShowDropdown}
              >
                <div className="userlogged__avatar-img user__img">
                  <img
                    src={profileImage || "/img/avatar_nghia.jpg"}
                    alt="Avatar teacher"
                  />
                </div>
                <i className="userlogged__avatar-icon">
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 3.5L7.00003 10.5L14 3.5H0Z" fill="white" />
                  </svg>
                </i>
              </div>
              <div
                className={`userlogged__dropdown dropdown ${
                  showDropdown ? "active" : ""
                }`}
              >
                <div className="userlogged__dropdown-info">
                  <div className="user__img">
                    <img
                      src={profileImage || "/img/avatar_nghia.jpg"}
                      alt="Avatar teacher"
                    />
                  </div>
                  <Link to={PATHS.PROFILE.INDEX} className="user__info">
                    <p className="title --t4">
                      <strong>{name || ""}</strong>
                    </p>
                    <span className="email">
                      {email || "Thông tin tài khoản"}
                    </span>
                  </Link>
                </div>
                <div className="userlogged__dropdown-list">
                  <Link to={PATHS.PROFILE.MY_COURSE}>Khóa học của tôi</Link>
                  <Link to={PATHS.PROFILE.MY_PAYMENT}>Lịch sử thanh toán</Link>
                  <Link to={PATHS.CONTACT}>Hỗ trợ</Link>
                  <a href="" onClick={_onLogout}>
                    Đăng xuất
                    <i>
                      <img src="img/iconlogout.svg" alt="" />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HeaderAuth;
