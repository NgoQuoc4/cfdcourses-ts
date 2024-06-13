import { message } from "antd";
import { formatCurrentcy, formatDate } from "../../utils/format";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const HeroSection = ({
  name,
  title,
  startDate,
  duration,
  tags,
  teacherInfo,
  price,
  image,
  linkOrder,
}: {
  name: string;
  title: string;
  startDate: number;
  duration: number;
  tags: string[];
  teacherInfo: { name: string; image: string };
  price: number;
  image: string;
  linkOrder: string;
}) => {
  const _onShare = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
    message.success("Đã copy đường dẫn khóa học này");
  };

  return (
    <section className="hero herodetail">
      <div className="hero__content">
        <div className="container">
          <h3 className="category label --white">{title || ""}</h3>
          <h2 className="title --white">{name || ""}</h2>
          <div className="infor">
            <div className="infor__item">
              <label className="label --white">Khai giảng</label>
              <p className="title --t3 --white">
                {formatDate(startDate) || "--"}
              </p>
            </div>
            <div className="infor__item">
              <label className="label --white">Thời lượng</label>
              <p className="title --t3 --white">{duration} buổi</p>
            </div>
            <div className="infor__item">
              <label className="label --white">Hình thức</label>
              <p className="title --t3 --white">{tags}</p>
            </div>
          </div>

          <Button link={linkOrder} className="btn-regcourse">
            {" "}
            Đăng ký
          </Button>
          {/* Chưa đăng ký */}
          {/* <a
            href="course-order.html"
            className="btn btn--primary btn-regcourse"
          >
            Đăng ký
          </a> */}
          {/* Đã đăng ký */}
          {/* <div class="btn btn--primary btn-regcourse --disable">Đã đăng ký</div> */}
        </div>
      </div>
      <div className="hero__bottom">
        <div className="container-fluid">
          <a href="" className="user">
            <div className="user__img">
              <img src={teacherInfo?.image || ""} alt="Avatar teacher" />
            </div>
            <p className="user__name --white">{teacherInfo?.name || ""}</p>
          </a>
          <div className="pricebox">
            <p className="title --t3 --white">
              {formatCurrentcy(price) + "VND"}
            </p>
          </div>
          <a href="" onClick={_onShare} className="sharebox s--white">
            Chia sẻ
            <i>
              <img
                src="https://cfdcircle.vn/img/iconshare.svg"
                alt="CFD Circle"
              />
            </i>
          </a>
        </div>
      </div>
      <div className="hero__background">
        <img
          className="hero__background-img"
          src={image || ""}
          alt="CFD Circle"
        />
      </div>
    </section>
  );
};

export default HeroSection;
