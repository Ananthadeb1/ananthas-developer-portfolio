import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./Main/main";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/Sections/AboutMe/AboutMe";
import Skills from "./Components/Sections/Skills/Skills";
import ContactMe from "./Components/Sections/ContactMe/ContactMe";
import Projects from "./Components/Sections/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/aboutme",
        element: <AboutMe></AboutMe>
      },
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/contactme",
        element: <ContactMe></ContactMe>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/blogs",
        element: <></>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);