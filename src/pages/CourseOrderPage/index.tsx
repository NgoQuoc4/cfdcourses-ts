import useMutation from "../../hooks/useMutation";
import { useEffect } from "react";
import { courseService } from "../../services/courseServices";
import { useParams } from "react-router-dom";
import { ROLES } from "../../constants/roles";
import InfoOrder from "./InfoOrder";
import OrderForm from "./OrderForm";
import { useDispatch, useSelector } from "react-redux";
import { handleGetProfile } from "../../store/reducers/authReducer";

const CourseOrderPage = () => {
  const { courseSlug } = useParams();

  const dispatch = useDispatch();
  const { data: courseDetailData, execution }: { data: any } = useMutation(
    courseService.getCourseBySlug
  );
  useEffect(() => {
    dispatch(handleGetProfile() as any);
  }, []);

  useEffect(() => {
    if (courseSlug) execution(courseSlug || "");
  }, [courseSlug]);

  const { teams } = courseDetailData || {};
  const teacherInfo: object = teams?.find((team: any) =>
    team?.tags.includes(ROLES.teacher)
  );

  const modifiedInfo = {
    ...courseDetailData,
    teacherInfo,
  };
  const modifiedForm = {
    ...courseDetailData,
  };
  return (
    <main className="mainwrapper --ptop">
      <section className="sccourseorder">
        <div className="container small">
          <InfoOrder {...modifiedInfo} />
          <OrderForm {...modifiedForm} />
        </div>
      </section>
    </main>
  );
};

export default CourseOrderPage;
