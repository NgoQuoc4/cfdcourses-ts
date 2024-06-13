import { Link, useNavigate } from "react-router-dom";
import PATHS from "../../constants/paths";
// import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { MODAL_TYPES } from "../../constants/general";
// import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import tokenMethod from "../../utils/token";
import {
  handleLogout,
  handleShowModal,
} from "../../store/reducers/authReducer";

const HeaderAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { dropdown, handleShowDropdown, handleCloseDropdown } =
  //   useAuthContext();

  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  useEffect(() => {
    document.addEventListener("click", () => setShowDropdown(false));
    return () => {
      document.removeEventListener("click", () => setShowDropdown(false));
    };
  }, []);

  const _onShowDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown(true);
  };

  const _onShowModal = (e: any, type: string) => {
    e?.preventDefault();
    e?.stopPropagation();
    dispatch(handleShowModal(type));
  };

  const _onLogout = (e) => {
    e?.preventDefault();
    dispatch(handleLogout());
    navigate(PATHS.HOME);
  };

  console.log("tokenMethod.get()", tokenMethod.get());
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
                  <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
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
                    <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                  </div>
                  <a href="student-profile.html" className="user__info">
                    <p className="title --t4">
                      <strong>Trần Nghĩa</strong>
                    </p>
                    <span className="email">Thông tin tài khoản</span>
                  </a>
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
