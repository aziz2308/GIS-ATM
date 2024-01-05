import { lazy, Suspense } from "react";
import useSettings from "hooks/useSettings";
import LoadingScreen from "components/LoadingScreen";
import LayoutV3 from "layouts/layout-v3/DashboardLayout";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
}; // dashboards

const Error = Loadable(lazy(() => import("./pages/404")));
const Home = Loadable(lazy(() => import("./pages/home")));
const Map = Loadable(lazy(() => import("./pages/map")));
const About = Loadable(lazy(() => import("./pages/about")));
const Contact = Loadable(lazy(() => import("./pages/contact")));
const News = Loadable(lazy(() => import("./pages/news")));

const ActiveLayout = () => {
  const { settings } = useSettings();

  switch (settings.activeLayout) {
    case "layout3":
      return <LayoutV3 />;

    default:
      return <LayoutV3 />;
  }
};

const routes = () => {
  return [
    {
      path: "/",
      element: <ActiveLayout />,
      children: dashboardRoutes,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];
};

const dashboardRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "map",
    element: <Map />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "news",
    element: <News />,
  },
];
export default routes;
