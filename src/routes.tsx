import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage/index.tsx";
import NavBar from "./components/NavBar/index.tsx";
import Home from "./pages/Home/index.tsx";
import Footer from "./components/Footer/index.tsx";
import AboutUs from "./pages/AboutUs/index.tsx";

export default function AppRoutes() {
  return (
    <div style={{ width: "100%" }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
