
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Experience from "./component/experience";
import Skills from "./component/skill";
import Me from "./component/me";
import Project from "./component/project";
import { Navbar } from "./component/navbar";
import Contact from "./component/contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <div className="bg-gray-900 ">
          {/* <Navbar/> */}
          <Me/>
          <Skills/>
          <Project/>
          <Experience/>
          {/* <Contact/> */}
          </div>
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
