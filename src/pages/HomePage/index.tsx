import HeroSection from "./HeroSection";
import CourseComingSection from "./CourseComingSection";
import CoursesSection from "./CoursesSection";
import TeacherSection from "./TeacherSection";
import FeaturedSection from "./FeaturedSection";
import TestimonialSection from "./TestimonialSection";
import FaqSection from "./FaqSection";
import GallerySection from "./GallerySection";
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/courseServices";
import CallRegisterSection from "./CallRegisterSection";
import { teamServices } from "../../services/teamServices";
import { galleryServices } from "../../services/galleryServices";
import { questionService } from "../../services/questionService";

const HomePage = () => {
  //get courses coming soon
  const {
    data: dataCourses,
    loading: loadingCourses,
  }: { data: any; loading: boolean } = useQuery(courseService.getCourses);
  // filter courses coming soon
  const comingCourses =
    dataCourses?.courses?.filter(
      (course: any) =>
        course.startDate && new Date(course.startDate) > new Date()
    ) || [];
  ///////////////////////////////////////////////////////////////////
  // get Course section
  const coursesData = dataCourses?.courses || [];
  //   ///////////////////////////////////////////////////////////////////
  // get teacher team
  const {
    data: dataTeacher,
    loading: loadingTeacher,
  }: { data: any; loading: boolean } = useQuery(teamServices.getTeam);
  const teams = dataTeacher?.teams || [];
  // ///////////////////////////////////////////////////////////

  const {
    data: dataQuestion,
    loading: loadingQuestion,
  }: { data: any; loading: boolean } = useQuery(questionService.getQuestion);
  const questions = dataQuestion?.questions || [];

  ////////////////////////////////////////////////////////////////
  //get Gallery
  const {
    data: dataGallery,
    loading: loadingGallery,
  }: { data: any; loading: boolean } = useQuery(galleryServices.getGallery);
  const galleries = dataGallery?.galleries?.[0]?.images || [];
  return (
    <main className="mainwrapper">
      <HeroSection />
      <CourseComingSection courses={comingCourses} loading={loadingCourses} />
      <CoursesSection courses={coursesData} loading={loadingCourses} />
      <TeacherSection teachers={teams} loading={loadingTeacher} />
      <FeaturedSection />
      {/* --------------------------------Testimonial-------------------------------- */}
      <TestimonialSection />
      {/* --------------------------------faq-------------------------------- */}
      <FaqSection questions={questions} loading={loadingGallery} />
      <GallerySection galleries={galleries} loading={loadingGallery} />
      <CallRegisterSection />
    </main>
  );
};

export default HomePage;
