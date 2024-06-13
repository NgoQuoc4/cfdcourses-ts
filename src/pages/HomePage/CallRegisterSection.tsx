import { Link } from "react-router-dom";
import PATHS from "../../constants/paths";

const CallRegisterSection = () => {
  return (
    <section className="callregister">
      <div className="container">
        <div className="callregister__content">
          <h3 className="title --t2">
            <span className="color--primary">trở thành một phần</span> của CFD
            Circle
          </h3>
          <p>
            Chúng tôi rất vui khi bạn quyết định trở thành một phần của CFD
            Circle để cùng nhau học hỏi, lan toả và chia sẻ những kinh nghiệm
            quý giá cho cộng đồng.
          </p>
          <Link to={PATHS.COURSE.INDEX} className="btn btn--primary">
            Tham gia Khoá học
          </Link>
          <Link to={PATHS.CONTACT} className="btn btn--border --black">
            Liên hệ tư vấn
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallRegisterSection;
