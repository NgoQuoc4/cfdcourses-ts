import { formatCurrentcy } from "../../utils/format";

const InfoOrder = ({
  image,
  title,
  teacherInfo,
  price,
}: {
  image: string;
  title: string;
  teacherInfo: { name: string };
  price: number;
}) => {
  const { name } = teacherInfo || {};

  return (
    <div className="itemorder infoorder">
      <h3 className="title --t3">Thông tin đơn hàng</h3>
      <div className="boxorder">
        <div className="boxorder__col">
          <label className="label">Tên khoá học</label>
          <div className="boxorder__col-course">
            <div className="img">
              <img src={image || ""} alt="" />
            </div>
            <div className="info">
              <p className="name">
                <strong>{title || ""}</strong>
              </p>
              <p>{name || ""}</p>
            </div>
          </div>
        </div>
        <div className="boxorder__col">
          <label className="label">Tạm tính</label>
          <p>{formatCurrentcy(price) + "VND" || ""}</p>
        </div>
        <div className="boxorder__col">
          <label className="label">Giảm giá</label>
          <p>0đ</p>
        </div>
        <div className="boxorder__col">
          <label className="label">thành tiền</label>
          <p>
            <strong>{formatCurrentcy(price) + "VND" || ""}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoOrder;
