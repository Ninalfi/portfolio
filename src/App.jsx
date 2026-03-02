import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import CursorFollower from "./component/CursorFollwer";

export default function App() {
  return (
    <>
    <CursorFollower />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </>
  );
}