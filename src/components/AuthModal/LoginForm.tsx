import { useDispatch, useSelector } from "react-redux";
import { handleLogin, handleShowModal } from "../../store/reducers/authReducer";
import { MODAL_TYPES } from "../../constants/general";
import useDebounce from "../../hooks/useDebounce";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { MESSAGE, REGEX } from "../../constants/validate";
import tokenMethod from "../../utils/token";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  // show modal login form
  const _onShowModal = (e: any, type: string) => {
    e?.preventDefault();
    e?.stopPropagation();
    dispatch(handleShowModal(type));
  };
  // form
  type FormValues = {
    email: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ reValidateMode: "onBlur" });

  // submit form
  const _onSubmit = async (data: FormValues) => {
    if (data && !loading.login) {
      try {
        const res = await dispatch(handleLogin(data)).unwrap();
        console.log("res data login", res);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const renderLoading = useDebounce(loading.login, 300);
  console.log("renderLoading", renderLoading);
  return (
    <div className="modal__wrapper-content active mdlogin">
      <h3 className="title --t3">Đăng nhập</h3>
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
      <span className="line">Hoặc</span>*/}
      {/* form login */}
      <form onSubmit={handleSubmit(_onSubmit)} className="form">
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
        <div className="form__bottom">
          <p>
            Bạn chưa có tài khoản?
            <span
              className="color--primary btnmodal"
              data-modal="mdregister"
              onClick={(e) => _onShowModal(e, MODAL_TYPES.register)}
            >
              Đăng ký
            </span>
          </p>
          {/* <a className="color--primary" href="#">
            Quên mật khẩu?
          </a> */}
        </div>
        <button className="btn btn--primary form__btn-register" type="submit">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
