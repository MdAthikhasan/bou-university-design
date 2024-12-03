import img from "../../assets/images/bou_logo.jpg";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom position-sticky top-0 z-1">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo and Brand Name */}
        <a className="navbar-brand" href="#">
          <img
            src={img}
            alt="Logo"
            className="me-2"
            style={{ maxWidth: "250px" }}
          />
        </a>

        {/* Toggler Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas for Navbar Links */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="navbarNav"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close mt-1 me-1"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Academic
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Division
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Regional Centers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Results
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Notice
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Admission
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Registration
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
