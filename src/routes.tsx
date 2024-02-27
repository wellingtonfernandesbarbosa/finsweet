import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage/index.tsx";
import NavBar from "./components/NavBar/index.tsx";
import Home from "./pages/Home/index.tsx";
import Footer from "./components/Footer/index.tsx";
import AboutUs from "./pages/AboutUs/index.tsx";
import Sermon from "./pages/Sermon/index.tsx";
import Blog from "./pages/Blog/index.tsx";
import BlogPost from "./pages/Blog/BlogPost/index.tsx";
import SermonEvent from "./pages/Sermon/SermonEvent/index.tsx";
import Contact from "./pages/Contact/index.tsx";

export default function AppRoutes() {
  return (
    <div style={{ width: "100%" }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="sermon" element={<Sermon />} />
            <Route path="sermon/:id" element={<SermonEvent />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogPost />} />
            <Route path="contactus" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
