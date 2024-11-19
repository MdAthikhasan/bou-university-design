import img from "../../assets/images/bou_logo.jpg";

function Header() {
  return (
    <nav className="navbar position-sticky top-0 z-1 navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container d-flex align-items-center justify-content-between">
        {/* <!-- Logo and Brand Name --> */}
        <div>
          <a className="navbar-brand " href="#">
            <img
              src={img}
              alt="Logo"
              className="me-2"
              style={{
                width: "250px",
              }}
            />
          </a>
        </div>
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
        {/* <!-- Navbar Links --> */}
        <div className="offcanvas offcanvas-end" id="navbarNav">
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
              <a className="nav-link  text-dark" href="#">
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
    </nav>
  );
}
export default Header;
