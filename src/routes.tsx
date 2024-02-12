import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage/index.tsx';
import NavBar from "./components/NavBar/index.tsx";

export default function AppRoutes() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<DefaultPage />}></Route>
        </Routes>
      </Router>
    </main>
  );
}
