import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import StudentManagement from "../Pages/StudentManagemnt/StudentManagement";
import AboutPage from "../Pages/AboutPage/AboutPage";
import Contact from "../Pages/ContactPage/Contact";

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
         path: "/",
         element: <HomePage></HomePage> 
      },
      {
        path: '/studentManage',
        element: <StudentManagement></StudentManagement>
      },
      {
        path: '/about',
        element: <AboutPage></AboutPage>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ],
  },
]);

export default router;
