import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">My React App</h1>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;