import { Route, Routes } from "react-router-dom";
import About from "../pages/about/about";
import Skills from "../pages/skills/skills";
import Project from "../pages/project/project";

const routesApp = () => {
  const BackdropAction = ({ children }) => {
    return children;
  };

  return (
    <BackdropAction>
      <Routes>
        <Route path="/Portifolio" element={<About />} />
        <Route path="/Portifolio/about" element={<About />} />
        <Route path="/Portifolio/skills" element={<Skills />} />
        <Route path="/Portifolio/projects" element={<Project />} />
      </Routes>
    </BackdropAction>
  );
};

export default routesApp;
