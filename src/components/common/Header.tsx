import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default () => {
  const { isAuthenticated } = useAuth();
  return (
    <header id="header">
      {/* Logo */}
      <Link to="/">
        <h1>Riddles Game</h1>
      </Link>

      {/* Nav Links */}
      <nav>
        <ul id="nav-menu">
          <li>
            <Link to={"/riddles"}>Play</Link>
          </li>
          <li>
            <Link to={"/leaderboard"}>Leaderboard</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <Link to={"profile"}>Profile</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
