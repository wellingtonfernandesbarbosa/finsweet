import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage/index.tsx';
import NavBar from "./components/NavBar/index.tsx";
import Home from './pages/Home/index.tsx';

export default function AppRoutes() {
  return (
    <main style={{ width: "100%" } }>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
