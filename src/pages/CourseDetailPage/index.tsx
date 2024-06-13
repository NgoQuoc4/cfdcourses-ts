import { useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/courseServices";
import useMutation from "../../hooks/useMutation";
import { useEffect } from "react";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import FeaturedSection from "./FeaturedSection";
import CoursesSection from "./CoursesSection";
import { ROLES } from "../../constants/roles";
import { questionService } from "../../services/questionService";
import FaqSection from "../HomePage/FaqSection";

const CourseDetailPage = () => {
  const { courseSlug } = useParams();

  // console.log("courseSlug", courseSlug);
  // get all courses
  const {
    data: dataCourses,
    loading: loadingCourses,
  }: { data: any; loading: boolean } = useQuery(courseService.getCourses);
  const courses = dataCourses?.courses;
  // console.log("courses", courses);

  // get course detail
  const {
    data: dataCourseDetails,
    loading: loadingCourse,
    execution,
  }: { data: any; loading: boolean; execution: any } = useMutation(
    courseService.getCourseBySlug
  );

  useEffect(() => {
    if (courseSlug) execution(courseSlug) || "";
  }, [courseSlug]);

  console.log("dataCourseDetails", dataCourseDetails);
  const { teams } = dataCourseDetails || {};

  const teacherInfo = teams?.find((item: any) =>
    item.tags.includes(ROLES.teacher)
  );
  const linkOrder = `/course-order/` + courseSlug;

  const modifiedProps = {
    ...dataCourseDetails,
    teacherInfo,
    linkOrder,
  };

  const {
    data: dataQuestion,
    loading: loadingQuestion,
  }: { data: any; loading: boolean } = useQuery(questionService.getQuestion);
  const questions = dataQuestion?.questions || [];

  return (
    <main className="mainwrapper coursedetailpage">
      <HeroSection {...modifiedProps} />
      <ContentSection {...modifiedProps} />
      <FeaturedSection />
      <FaqSection questions={questions} loading={loadingQuestion} />
      <CoursesSection
        courses={courses}
        loading={loadingCourses}
        {...dataCourseDetails}
      />
    </main>
  );
};

export default CourseDetailPage;
