import { useEffect } from "react";
import CourseItem from "../../components/CourseItem";
import { Empty, Skeleton } from "antd";
import { CourseTypes } from "../../constants/general";
import useDebounce from "../../hooks/useDebounce";

const CourseComingSection = ({
  courses,
  loading,
}: {
  courses: any;
  loading: boolean;
}) => {
  useEffect(() => {
    const flickytyController = () => {
      const courseComingSlider = $("#coursecoming__slider");
      courseComingSlider.flickity({
        cellAlign: "left",
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        dragThreshold: 0,
        wrapAround: true,
      });
      $(".coursecoming .control .control__next").on("click", function (e) {
        e.preventDefault();
        courseComingSlider.flickity("next");
      });
      $(".coursecoming .control .control__prev").on("click", function (e) {
        e.preventDefault();
        courseComingSlider.flickity("previous");
      });
    };
    const myTimeout = setTimeout(() => {
      if (courses?.length > 0) {
        flickytyController();
      }
    }, 300);
    return () => {
      clearTimeout(myTimeout);
    };
  }, [courses]);

  const loadingCourses = useDebounce(loading, 200);

  return (
    <section className="coursecoming --scpadding">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">
            Khoá học <span className="color--primary">sắp khai giảng</span>
          </h2>
          <div className="control">
            <div className="control__prev">
              <img src="img/icon-btn-control.svg" alt="icon prev" />
            </div>
            <div className="control__next">
              <img src="img/icon-btn-control.svg" alt="icon next" />
            </div>
          </div>
        </div>
      </div>
      {!loading && courses?.length === 0 && (
        <Empty
          description="Không tìm thấy dữ liệu nào"
          style={{ margin: "0 auto" }}
        />
      )}
      {loadingCourses && courses?.length > 0 ? (
        <div
          className="coursecoming__list"
          id="coursecoming__slider"
          style={{ height: "50vh" }}
        >
          <Skeleton active />
          <br />
          <Skeleton active />
        </div>
      ) : (
        <div className="coursecoming__list" id="coursecoming__slider">
          {courses?.map((course: any, index: string) => {
            return (
              <CourseItem
                key={course?.id || index}
                {...course}
                type={CourseTypes.coming}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default CourseComingSection;
