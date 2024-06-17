import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { MESSAGE, REGEX } from "../../constants/validate";
import useMutation from "../../hooks/useMutation";
import { subscribesService } from "../../services/subscribesService";
import { useNavigate } from "react-router-dom";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import { message } from "antd";
import PATHS from "../../constants/paths";
type ContactType = {
  name: string;
  email: string;
  phone: number;
  title: string;
  description: string;
};
const content = [
  { value: "", label: "--" },
  { value: "react", label: "ReactJs" },
  { value: "responsive", label: "Web Responsive" },
];
const ContactForm = () => {
  const navigate = useNavigate();
  const { execution } = useMutation(subscribesService.subscribes);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactType>({ reValidateMode: "onBlur" });

  const _onSubmit = (data: ContactType) => {
    if (data) {
      const { name, email, title, description } = data;
      const payload = { name, email, title, description };
      execution(payload, {
        onSuccess: (payload: ContactType) => {
          message.success("Send question successfully");
          // reset form
          reset?.();
          navigate(PATHS.HOME);
        },
        onFailure: (error) => {
          message.error("Send question failed!");
          console.log("error", error);
        },
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(_onSubmit)}>
      <h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>
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
        label="Số điện thoại"
        required
        {...register("phone", {
          required: MESSAGE.required,
          pattern: {
            value: REGEX.phone,
            message: MESSAGE.phone,
          },
        })}
        error={errors?.phone?.message || ""}
      />

      <Select
        label="Chủ đề hỗ trợ"
        required
        options={content}
        {...register("title", {
          required: MESSAGE.required,
        })}
        error={errors?.title?.message || ""}
      />

      <TextArea
        label="Nội dung"
        required
        {...register("description", {
          required: MESSAGE.required,
        })}
        error={errors?.description?.message || ""}
      />
      <div className="btncontrol">
        <button className="btn btn--primary" type="submit">
          Gửi
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
