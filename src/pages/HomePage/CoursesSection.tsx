/* eslint-disable @typescript-eslint/no-explicit-any */
import { Empty, Skeleton } from "antd";
import { CourseTypes } from "../../constants/general";
import CourseItem from "../../components/CourseItem";
import PATHS from "../../constants/paths";
import { Link } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";

const CoursesSection = ({
  courses,
  loading,
}: {
  courses: any;
  loading: boolean;
}) => {
  const loadingCourse = useDebounce(loading, 500);
  return (
    <section className="courses">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">
            Tất cả <span className="color--primary">khóa học</span>
          </h2>
        </div>
        <div className="courses__list">
          {!loadingCourse && courses?.length === 0 && (
            <Empty
              description="Không tìm thấy dữ liệu nào"
              style={{ margin: "0 auto" }}
            />
          )}
          {loadingCourse && courses?.length > 0
            ? Array(4)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="courses__list-item"
                    style={{ height: "5vh" }}
                  >
                    <Skeleton active />
                    <br />
                    <Skeleton active />
                  </div>
                ))
            : courses?.map((courses: any, index: string) => {
                return (
                  <CourseItem
                    key={courses.id || index}
                    type={CourseTypes.normal}
                    {...courses}
                  />
                );
              })}
        </div>
        <div className="courses__btnall">
          <Link to={PATHS.COURSE.INDEX} className="course__btn btn btn--grey">
            Tất cả khoá học
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
