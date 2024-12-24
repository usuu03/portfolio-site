import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDisplay from "./pages/ProjectDisplay";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen font-lato">
        <Header />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/projects" element={<ProjectDisplay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
