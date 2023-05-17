import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./sass/main.scss";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
