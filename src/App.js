import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./sass/main.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
// About Page
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
