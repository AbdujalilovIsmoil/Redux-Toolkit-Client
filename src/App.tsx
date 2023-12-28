import Routes from "./Routes";
import { Home, Error } from "pages";
import { Loader } from "components";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const Login = lazy(() => import("./pages/Login"));
  const Registration = lazy(() => import("./pages/Registration"));

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Routes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      path: "/pages/login",
      element: <Login />,
    },
    {
      path: "/pages/registration",
      element: <Registration />,
    },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default App;
