import { BrowserRouter, Route, Routes } from "react-router-dom";
import PATHS from "./constants/paths";
import { Suspense, lazy } from "react";

import PageLoading from "./components/PageLoading";

function App() {
  const MainLayout = lazy(() => import("./layouts/MainLayout"));
  const HomePage = lazy(() => import("./pages/HomePage"));
  const CoursesPage = lazy(() => import("./pages/CoursesPage"));
  const CourseDetailPage = lazy(() => import("./pages/CourseDetailPage"));
  const BlogPage = lazy(() => import("./pages/BlogPage"));
  const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
  const CourseOrderPage = lazy(() => import("./pages/CourseOrderPage"));
  const StudentProfilePage = lazy(() => import("./pages/StudentProfilePage"));
  const MyInfo = lazy(() => import("./pages/StudentProfilePage/MyInfo"));
  const MyCourse = lazy(() => import("./pages/StudentProfilePage/MyCourse"));
  const MyPayment = lazy(() => import("./pages/StudentProfilePage/MyPayment"));
  const PaymentMethodPage = lazy(() => import("./pages/PaymentMethodPage"));
  const ContactPage = lazy(() => import("./pages/ContactPage"));
  const AboutPage = lazy(() => import("./pages/AboutPage"));
  const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
  const ErrorPage = lazy(() => import("./pages/ErrorPage"));
  const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
  // const PageLoading = lazy(() => import("./components/PrivateRoute"));

  return (
    <Suspense fallback={<PageLoading />}>
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.HOME} element={<MainLayout />}>
            <Route index element={<HomePage />} />

            <Route path={PATHS.COURSE.INDEX} element={<CoursesPage />} />
            <Route path={PATHS.COURSE.DETAIL} element={<CourseDetailPage />} />

            <Route path={PATHS.BLOG.INDEX} element={<BlogPage />} />
            <Route path={PATHS.BLOG.DETAIL} element={<BlogDetailPage />} />

            <Route element={<PrivateRoute redirectPath={PATHS.HOME} />}>
              <Route path={PATHS.COURSE.ORDER} element={<CourseOrderPage />} />

              <Route
                path={PATHS.PROFILE.INDEX}
                element={<StudentProfilePage />}
              >
                <Route index element={<MyInfo />} />
                <Route path={PATHS.PROFILE.MY_COURSE} element={<MyCourse />} />
                <Route
                  path={PATHS.PROFILE.MY_PAYMENT}
                  element={<MyPayment />}
                />
              </Route>
            </Route>

            <Route path={PATHS.PAYMENT} element={<PaymentMethodPage />} />
            <Route path={PATHS.CONTACT} element={<ContactPage />} />
            <Route path={PATHS.PRIVACY} element={<PrivacyPage />} />
            <Route path={PATHS.ABOUT} element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
