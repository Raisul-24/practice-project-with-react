import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import StudentManagement from "../Pages/StudentManagemnt/StudentManagement";

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
      }
    ],
  },
]);

export default router;
