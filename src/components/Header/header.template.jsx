import { Link } from "react-router-dom";

import "./header.style.scss";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="./logo-black.png" alt="" height="24" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Main
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="posts">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="works">
                My works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
