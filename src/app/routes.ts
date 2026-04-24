import { createBrowserRouter } from "react-router";
import Layout from "./components/layout";
import Home from "./pages/home";
import Services from "./pages/services";
import About from "./pages/about";
import Team from "./pages/team";
import Contact from "./pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "team", Component: Team },
      { path: "contact", Component: Contact },
    ],
  },
]);