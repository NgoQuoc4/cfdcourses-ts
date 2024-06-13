import { Link } from "react-router-dom";
import PATHS from "../../constants/paths";
import { ROLES } from "../../constants/roles";
import { formatCurrentcy, formatDate } from "../../utils/format";
import { CourseTypes } from "../../constants/general";
import Button from "../Button";

const CourseItem = ({
  type = CourseTypes.normal,
  name,
  slug,
  // tags,
  title,
  teams,
  image,
  startDate,
  price,
}: {
  type: string;
  name: string;
  slug: string;
  tags: string[];
  title: string;
  teams: object[];
  image: string;
  startDate: number;
  price: number;
}) => {
  const orderLink = `/course-order/` + slug;

  const teacherInfo: any = teams?.find((item: any) =>
    item?.tags.includes(ROLES.teacher)
  );
  const detailPath = PATHS.COURSE.INDEX + `/${slug}`;
  if (type === CourseTypes.coming) {
    return (
      <div className="coursecoming__item">
        <div className="coursecoming__item-img">
          <Link to={detailPath}>
            <img src={image || ""} alt="Khóa học sắp ra mắt CFD" />
          </Link>
        </div>
        <div className="coursecoming__item-content">
          <p className="category label">{title || ""}</p>
          <h2 className="title --t2">
            <Link to={detailPath}>{name || ""}</Link>
          </h2>
          <div className="user">
            <div className="user__img">
              <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
            </div>
            <p className="user__name">{teacherInfo?.name || ""}</p>
          </div>
          <div className="info">
            <div className="labeltext">
              <span className="label --blue">Ngày khai giảng</span>
              <p className="title --t2">{formatDate(startDate) || "--"}</p>
            </div>
            <div className="labeltext">
              <span className="label --blue">Hình thức học</span>
              <p className="title --t2">Offline | Online</p>
            </div>
          </div>
          <div className="btnwrap">
            <Button link={orderLink} className="btn btn--primary">
              Đăng Ký Học
            </Button>
            <Button link={detailPath} className="btn btn--border --black">
              Xem chi tiết
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="courses__list-item">
      <div className="img">
        <Link to={detailPath}>
          <img
            src={image || ""}
            alt="Khóa học CFD"
            className="course__thumbnail"
          />
          <span className="course__img-badge badge">Offline | Online</span>
        </Link>
      </div>
      <div className="content">
        <p className="label">{title || ""}</p>
        <h3 className="title --t3">
          <Link to={detailPath}>{name || ""}</Link>
        </h3>
        <div className="content__info">
          <div className="user">
            <div className="user__img">
              <img src={teacherInfo?.image || ""} alt="Avatar teacher" />
            </div>
            <p className="user__name">{teacherInfo?.name || ""}</p>
          </div>
          <div className="price">
            <strong>{formatCurrentcy(price) + "VND"}</strong>
          </div>
        </div>
        <div className="content__action">
          <Button link={orderLink} className="btn btn--primary">
            Đăng ký ngay
          </Button>
          <Button link={detailPath} className="btn btn--default">
            <img src="img/icon-paper.svg" alt="icon paper" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
