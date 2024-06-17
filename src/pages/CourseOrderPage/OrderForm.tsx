import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { MESSAGE, REGEX } from "../../constants/validate";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PAYMENTS } from "../../constants/payment";
import { message } from "antd";
import useMutation from "../../hooks/useMutation";
import { orderService } from "../../services/orderService";
import { useNavigate } from "react-router-dom";
import PATHS from "../../constants/paths";

type TypeOrder = {
  firstName: string;
  phone: string;
  email: string;
  course: string;
  type: string;
  paymentMethod: string;
};

const OrderForm = ({ tags, id }: { tags: string[]; id: string }) => {
  const navigate = useNavigate();
  const { profile } = useSelector((state: any) => state.auth);
  const { firstName, phone, email } = profile || {};
  const [paymentMethod, setPaymentMethod] = useState("");
  const { execution } = useMutation(orderService.orderCourse);
  const typeOptions =
    tags?.length > 0
      ? [
          {
            value: "",
            label: "--",
          },
          // eslint-disable-next-line no-unsafe-optional-chaining
          ...tags?.map((tag: string) => ({ value: tag, label: tag })),
        ]
      : [{ value: "", label: "--" }];
  // form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeOrder>({
    reValidateMode: "onBlur",
    defaultValues: { firstName, email, phone },
  });
  // reset form state
  useEffect(() => {
    if (!profile) return;
    reset?.({ firstName, email, phone });
  }, [profile]);
  // change payment
  const handleChangePayment = (payment: string) => {
    setPaymentMethod(payment);
  };
  // submit
  const _onSubmit = (data: any) => {
    if (paymentMethod) {
      const { name = firstName, phone, type, course = id } = data || {};
      const payload = {
        name,
        phone,
        type,
        course,
        paymentMethod,
      };
      execution(payload, {
        onSuccess: (payload: TypeOrder) => {
          message.success("Send question successfully");
          // reset form
          reset?.();
          const handleClick = () => {
            setTimeout(() => {
              navigate(PATHS.PROFILE.MY_COURSE);
            }, 1000);
          };
          handleClick();
        },
        onFailure: (error) => {
          message.error("Send question failed!");
          console.log("error", error);
        },
      });
    } else {
      message.error("Vui lòng chọn phương thức thánh toán!");
    }
  };

  return (
    <form onSubmit={handleSubmit(_onSubmit)}>
      <div className="itemorder formorder">
        <h3 className="title --t3">Thông tin cá nhân</h3>
        <div className="boxorder">
          <div className="form">
            <div className="form-container">
              <Input
                label="Họ và tên"
                required
                {...register("firstName", {
                  required: MESSAGE.required,
                })}
                error={errors?.firstName?.message}
              />
              <Input
                label="Email"
                required
                disabled
                {...register("email")}
                error={errors?.email?.message}
              />
            </div>
            <div className="form-container">
              <Input
                label="Phone Number"
                required
                {...register("phone", {
                  required: MESSAGE.required,
                })}
                error={errors?.phone?.message}
              />
              <Select
                label="Hình thức học"
                required
                options={typeOptions}
                {...register("type", {
                  required: MESSAGE.required,
                })}
                error={errors?.type?.message}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="itemorder paymentorder">
        <h3 className="title --t3">Hình thức thanh toán</h3>
        <div className="boxorder">
          {PAYMENTS?.map((payment) => {
            const { id, icon, label, description } = payment || {};
            return (
              <div
                key={id}
                className="boxorder__pay"
                onClick={() => handleChangePayment(id)}
              >
                <label className="radiocontainer">
                  <img src={icon} alt="" />
                  {label || ""}
                  <input
                    {...register("paymentMethod")}
                    type="radio"
                    name="radio"
                    value={id}
                    checked={paymentMethod === id}
                  />
                  {/* <Input
                    type="radio"
                    label=""
                    required
                    checked={paymentMethod === id}
                    {...register("paymentMethod")}
                    error={errors?.paymentMethod?.message}
                  /> */}
                  <span className="checkmark" />
                </label>
                <div
                  className="boxorder__pay-tooltip"
                  style={{
                    display: paymentMethod === id ? "block" : "none",
                    pointerEvents: paymentMethod ? "none" : "all",
                  }}
                >
                  {description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Input
                      type="radio"
                      label={label}
                      required
                      checked={paymentMethod === id}
                      {...register("paymentMethod")}
                      error={errors?.paymentMethod?.message}
                    /> */}
      {/* addclass --processing khi bấm đăng ký */}
      <button className="btn btn--primary" type="submit">
        <span>Đăng ký khoá học</span>
        <svg
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 0 0"
          xmlSpace="preserve"
        >
          <path
            fill="#fff"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </button>
    </form>
  );
};

export default OrderForm;
