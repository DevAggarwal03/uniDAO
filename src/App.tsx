import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";
import Courses from "./Pages/Courses";
import Dashboard from "./Pages/Dashboard";
import AllMembers from "./Pages/AllMembers";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard/:address" element={<Dashboard />} />
        <Route path="/dashboard/allMembers" element={<AllMembers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
