import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [ 
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "skills", element: <SkillsPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "resume", element: <ResumePage /> },
    ],
  },
]);

export default router;