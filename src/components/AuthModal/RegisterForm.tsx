import { useDispatch, useSelector } from "react-redux";
import {
  handleCloseModal,
  handleRegister,
  handleShowModal,
} from "../../store/reducers/authReducer";
import { MODAL_TYPES } from "../../constants/general";
import { useForm } from "react-hook-form";
import { MESSAGE, REGEX } from "../../constants/validate";
import Input from "../Input";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import PATHS from "../../constants/paths";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const password = useRef();
  const navigate = useNavigate();
  // show modal register
  const _onShowModal = (e: any, type: string) => {
    e?.preventDefault();
    e?.stopPropagation();
    dispatch(handleShowModal(type));
  };
  // close modal
  const _onCloseModal = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    dispatch(handleCloseModal());
    navigate(PATHS.PRIVACY);
  };
  // form
  type FormValues = {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ reValidateMode: "onBlur" });
  // check password
  password.current = watch("password", "");
  // submit
  const _onSubmit = async (data: FormValues) => {
    if (data && !loading.register) {
      try {
        const { name, email, password } = data;
        const payload = {
          email: email,
          password: password,
          firstName: name || "",
          lastName: "",
        };
        dispatch(handleRegister(payload)).unwrap();
        console.log("payload", payload);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="modal__wrapper-content active mdregister">
      <div className="form__bottom">
        <p>Bạn đã có tài khoản?</p>
        <div
          className="color--primary btnmodal"
          data-modal="mdlogin"
          onClick={(e) => _onShowModal(e, MODAL_TYPES.login)}
        >
          <strong>Đăng nhập</strong>
        </div>
      </div>
      {/* <div className="social">
        <a className="btn btn--google" href="#">
          <i>
            <img src="img/icon-google.svg" alt="Google CFD" />
          </i>
          <span>Đăng ký bằng Google</span>
        </a>
        <a className="btn btn--facebook" href="#">
          <i>
            <img src="img/icon-facebook-v2.svg" alt="Google CFD" />
          </i>
          <span>Đăng ký bằng Google</span>
        </a>
      </div>
      <span className="line">Hoặc</span> */}
      <form onSubmit={handleSubmit(_onSubmit)} className="form">
        <Input
          label="Họ và tên"
          required
          {...register("name", {
            required: MESSAGE.required,
          })}
          error={errors?.name?.message || ""}
        />
        <Input
          label="Email"
          required
          {...register("email", {
            required: MESSAGE.required,
            pattern: {
              value: REGEX.email,
              message: MESSAGE.email,
            },
          })}
          error={errors?.email?.message || ""}
        />
        <Input
          label="Password"
          required
          type="password"
          {...register("password", {
            required: MESSAGE.required,
            pattern: {
              value: REGEX.password,
              message: MESSAGE.password,
            },
          })}
          error={errors?.password?.message || ""}
        />
        {/* confirmPassword */}
        <Input
          label="Confirm Password"
          required
          type="password"
          {...register("confirmPassword", {
            required: MESSAGE.required,
            pattern: {
              value: REGEX.password,
              message: MESSAGE.password,
            },
            validate: (value) =>
              value === password.current || "Passwords do not match!",
          })}
          error={errors?.confirmPassword?.message || ""}
        />
        <p className="form__argee">
          Với việc đăng ký, bạn đã đồng ý
          <a href="" onClick={_onCloseModal} className="color--primary">
            Chính Sách Điều Khoản
          </a>{" "}
          của CFD
        </p>
        <button className="btn btn--primary form__btn-register" type="submit">
          Đăng ký tài khoản
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
