import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import LeaderboardPage from "./components/game/LeaderboardPage";
import RiddlesPage from "./components/game/RiddlesPage";
import AdminPage from "./components/admin/AdminPage";
import PlayerProfilePage from "./components/profile/PlayerProfilePage";
import NotFoundPage from "./components/common/NotFoundPage";
import Layout from "./components/common/Layout";
export default () => (
  <Router>
    <Layout>
      <Routes>
        <Route index element={<h1>Hello World2!</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/riddles" element={<RiddlesPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/profile" element={<PlayerProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  </Router>
);
