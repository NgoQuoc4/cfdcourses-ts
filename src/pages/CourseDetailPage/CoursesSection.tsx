import { Empty, Skeleton } from "antd";
import CourseItem from "../../components/CourseItem";
import { CourseTypes } from "../../constants/general";
import useDebounce from "../../hooks/useDebounce";

const CoursesSection = ({
  courses,
  loading,
  id,
}: {
  courses: any;
  id: string;
  loading: boolean;
}) => {
  console.log("id", id);
  const coursesLoading = useDebounce(loading, 300);
  return (
    <section className="courses">
      <div className="container">
        <div className="heading --center --noline">
          <h2 className="heading__title title --t2">Khoá học đề xuất</h2>
        </div>
        <div className="courses__list">
          {courses?.length === 0 && (
            <Empty
              description="Không tìm thấy dữ liệu nào"
              style={{ margin: "0 auto" }}
            />
          )}
          {coursesLoading && courses?.length > 0
            ? Array(3)
                .fill("")
                .map((_, index) => {
                  return (
                    <div key={index} className="courses__list-item">
                      <Skeleton active />
                    </div>
                  );
                })
            : courses?.map((course: any, index: number) => {
                if (index < 2 && course.id !== id)
                  return (
                    <CourseItem
                      key={course?.id || index}
                      {...course}
                      type={CourseTypes.normal}
                    />
                  );
              })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
