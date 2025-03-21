import { Route, Routes } from "react-router-dom";
import About from "../pages/about/about";
import Skills from "../pages/skills/skills";

const routesApp = () => {
  const BackdropAction = ({ children }) => {
    return children;
  };

  return (
    <BackdropAction>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<About />} />
      </Routes>
    </BackdropAction>
  );
};

export default routesApp;
