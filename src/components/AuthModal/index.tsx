import { useDispatch, useSelector } from "react-redux";
import {
  handleCloseModal,
  handleShowModal,
} from "../../store/reducers/authReducer";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { MODAL_TYPES } from "../../constants/general";
import tokenMethod from "../../utils/token";

import PATHS from "../../constants/paths";
import { useNavigate } from "react-router-dom";

const AuthModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showModal } = useSelector((state) => state.auth);

  const _onCloseModal = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    dispatch(handleCloseModal());
    if (!tokenMethod.get()) {
      return navigate(PATHS.HOME);
    }
  };

  return (
    <div className={`modal modallogin ${!showModal ? "" : "open"}`}>
      <div className="modal__wrapper">
        <div className="modal__wrapper-close" onClick={_onCloseModal}>
          <img src="/img/close_icon.svg" alt="CFD Register" />
        </div>
        {showModal === MODAL_TYPES.login && <LoginForm />}
        {showModal === MODAL_TYPES.register && <RegisterForm />}

        {/* <div className="modal__wrapper-content active mdconsult">
          <h3 className="title --t3">Đăng ký tư vấn</h3>
          <form action="#" className="form">
            <input
              type="text"
              className="form__input"
              name="name"
              placeholder="Họ và tên"
            />
            <input
              type="text"
              className="form__input"
              name="name"
              placeholder="Số điện thoại"
            />
            <input
              type="text"
              className="form__input"
              name="email"
              placeholder="Email"
            />
            <textarea
              name
              id
              cols={30}
              rows={4}
              className="form__input"
              placeholder="Nội dung cần tư vấn"
              defaultValue={""}
            />
            <button
              className="btn btn--primary form__btn-register"
              type="submit"
            >
              Gửi thông tin
            </button>
          </form>
        </div> */}
      </div>
      <div className="modal__overlay" onClick={_onCloseModal} />
    </div>
  );
};

export default AuthModal;
