import DetailImagePage from "../pages/DetailImagePage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "image/:id",
    element: <DetailImagePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
