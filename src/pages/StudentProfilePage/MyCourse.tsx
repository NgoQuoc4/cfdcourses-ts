import CourseItem from "../../components/CourseItem";
import { CourseTypes } from "../../constants/general";
import useQuery from "../../hooks/useQuery";
import { orderService } from "../../services/orderService";

const MyCourse = () => {
  const {
    data: myCourseData,
    loading: myCourseLoading,
  }: { data: any; loading: boolean } = useQuery(
    orderService.getCourserHistories
  );
  const courses = myCourseData?.orders || {};
  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      <div className="courses__list">
        {courses?.length &&
          courses?.map((myCourse: any) => {
            return (
              <CourseItem
                key={myCourse?.id}
                {...myCourse?.course}
                type={CourseTypes.normal}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MyCourse;
