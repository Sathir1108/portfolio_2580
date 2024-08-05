import "../CSS/Navbar.css";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
        <div className="container-fluid ">
          <a className="navbar-brand " href="#">
            SATHIR AHAMED
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center  "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav nav-underline justify-content-center">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SKILLS
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>

            <button
              className="btn btn-primary d-none d-md-block ms-auto"
              id="nav"
            >
              {" "}
              CONTACT NOW
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
