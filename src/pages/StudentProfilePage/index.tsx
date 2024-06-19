import { Link, NavLink, Outlet } from "react-router-dom";
import PATHS from "../../constants/paths";
import { useSelector } from "react-redux";

const StudentProfilePage = () => {
  const { profile } = useSelector((state: any) => state.auth);
  const {
    profileImage,
    firstName,
    lastName,
    introduce,
    email,
    phone,
    website,
    facebookURL,
  } = profile || {};

  return (
    <main className="mainwrapper profilepage">
      <div className="container">
        <div className="wrapper">
          <div className="sidebar">
            <div className="sidebar__info">
              <div className="useravatar">
                <div className="avatar">
                  <div className="img">
                    <img
                      src={profileImage || "/img/avatar_nghia.jpg"}
                      alt="avatar"
                    />
                  </div>
                  {/* <form action="/action_page.php">
                    <label htmlFor="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" />
                    <input type="submit" />
                  </form> */}
                </div>
                <h3 className="title --t3">
                  {firstName + lastName || firstName || "--"}
                </h3>
              </div>
            </div>
            <div className="sidebar__content">
              <h4>Giới thiệu</h4>
              <p className="description">{introduce || "--"}</p>
              <ul>
                <li>
                  <img src="/img/icon-mail-outline.svg" alt="icon" />
                  <span>{email || "--"}</span>
                </li>
                <li>
                  <img src="/img/icon-phone-outline.svg" alt="icon" />
                  <span>{phone || "--"}</span>
                </li>
                <li>
                  <img src="/img/icon-link.svg" alt="icon" />
                  <Link to={website} target="_blank">
                    {website || "--"}
                  </Link>
                </li>
              </ul>
              <div className="social">
                <Link
                  to={facebookURL}
                  target={facebookURL ? "_blank" : "_self"}
                >
                  <img src="/img/icon-fb-footer.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="tabwrap">
            <div className="tab">
              <div className="tab__title">
                <NavLink end to={PATHS.PROFILE.INDEX}>
                  Thông tin cá nhân
                </NavLink>
                <NavLink to={PATHS.PROFILE.MY_COURSE}>Khóa học của tôi</NavLink>
                <NavLink to={PATHS.PROFILE.MY_PAYMENT}>
                  Lịch sử thanh toán
                </NavLink>
              </div>
              <div className="tab__content">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentProfilePage;
