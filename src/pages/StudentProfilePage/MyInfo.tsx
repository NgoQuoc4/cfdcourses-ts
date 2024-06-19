import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input";
import { MESSAGE, REGEX } from "../../constants/validate";
import { useEffect } from "react";
import TextArea from "../../components/TextArea";
import { authService } from "../../services/authService";
import { message } from "antd";
import { handleGetProfile } from "../../store/reducers/authReducer";
type formInfo = {
  firstName: string;
  phone: string;
  email: string;
  password: string;
  facebookURL: string;
  website: string;
  introduce: string;
};
const MyInfo = () => {
  const { profile } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const {
    firstName,
    lastName = "",
    phone,
    email,
    facebookURL,
    website,
    introduce,
    password = "******",
  } = profile || {};
  console.log(profile);
  // form
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<formInfo>({
    reValidateMode: "onBlur",
    defaultValues: {
      firstName,
      email,
      phone,
      password,
      facebookURL,
      website,
      introduce,
    },
  });
  // reset
  useEffect(() => {
    if (!profile) return;
    reset?.({
      firstName,
      email,
      phone,
      password,
      facebookURL,
      website,
      introduce,
    });
  }, [profile]);

  const _onSubmit = async (data: any) => {
    console.log("data", data);
    const {
      firstName,
      lastName = "",
      facebookURL,
      website,
      phone,
      introduce,
    } = data || {};
    const payload = {
      firstName,
      lastName,
      facebookURL,
      website,
      phone,
      introduce,
    };
    try {
      const res = await authService.updateProfile(payload);
      if (res?.status === 200) {
        message.success("Updated profile successfully");
        dispatch(handleGetProfile() as any);
      }
    } catch (error) {
      message.error(error?.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      <form onSubmit={handleSubmit(_onSubmit)} className="form">
        <div className="form-container">
          <Input
            label="Họ và tên"
            required
            {...register("firstName", {
              required: MESSAGE?.required,
            })}
            error={errors?.firstName?.message}
          />
          <Input
            label="Số điện thoại"
            required
            {...register("phone", {
              required: MESSAGE?.required,
              pattern: {
                value: REGEX?.phone,
                message: MESSAGE?.phone,
              },
            })}
            error={errors?.phone?.message}
          />
        </div>

        <div className="form-container">
          <Input
            label="Email"
            required
            disabled
            {...register("email")}
            error={errors?.email?.message}
          />
          <Input
            label="Mật khẩu"
            required
            disabled
            type="password"
            {...register("password")}
            error={errors?.password?.message}
          />
          {/* <div className="textchange btnmodal" data-modal="mdchangepass">
                Đổi mật khẩu
              </div> */}
        </div>
        <Input
          label="Facebook URL"
          required
          {...register("facebookURL", {
            required: MESSAGE?.required,
          })}
          error={errors?.facebookURL?.message}
        />
        <Input
          label="Website"
          required
          {...register("website", {
            required: MESSAGE?.required,
          })}
          error={errors?.website?.message}
        />
        <TextArea
          label="Giới thiệu bản thân"
          required
          {...register("introduce", {
            required: MESSAGE?.required,
          })}
          error={errors?.introduce?.message}
        />
        {/* <div className="form-container textarea">
          <label className="label">Giới thiệu bản thân</label>
          <textarea className="form__input" name="content" defaultValue={""} />
        </div> */}
        {/* <p className="noti">Cập nhận thông tin thành công</p> */}
        <div className="form-group">
          <div className="btnsubmit">
            <button className="btn btn--primary" type="submit">
              Lưu lại
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyInfo;
