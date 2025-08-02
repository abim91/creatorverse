import { useRoutes } from "react-router-dom";
import App from "./App";
import ShowCreator from "./pages/ShowAllCreators";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewSingle from "./pages/ViewSingle";

export default function Routes() {
  const routes = [
    { path: "/", element: <App /> },
    { path: "/viewAll", element: <ShowCreator /> },
    { path: "/addCreator", element: <AddCreator /> },
    { path: "/editCreator/:name", element: <EditCreator /> },
    { path: "/:name", element: <ViewSingle /> },
  ];

  return useRoutes(routes);
}
