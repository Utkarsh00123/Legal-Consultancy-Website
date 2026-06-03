import { createBrowserRouter } from "react-router";
import Layout from "./components/layout";
import Home from "./pages/home";
import Services from "./pages/services";
import About from "./pages/about";
import Team from "./pages/team";
import Member from "./pages/member";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "team", Component: Team },
      { path: "team/:slug", Component: Member },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);