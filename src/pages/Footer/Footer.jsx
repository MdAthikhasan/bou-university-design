function Footer() {
  return (
    <footer className="bg-primary text-white pt-4">
      <div className="container">
        <div className="row d-flex align-items-center ">
          {/* Important Links */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">IMPORTANT LINKS</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  &gt; Ministry of Education
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  &gt; University Grants Commission
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  &gt; BOU Facebook Page
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  &gt; BOU Web Mail
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  &gt; BOU Web Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  &gt; BOU Tube
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  &gt; YouTube (Academic)
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">RESOURCES</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  &gt; Download Forms
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  &gt; BOU Act/Rules
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  &gt; Porikroma, Magazine & Journal
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  &gt; BOU E-Book
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  &gt; Journal of Scientific and Technological Research
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">BOU GOOGLE MAP</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.592904663655!2d90.3563314154346!3d23.774490593197387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x69f1b5f9c9b40c4b!2zMjPCsDQ2JzI4LjMiTiA5MMKwMjEnMjIuOSJF!5e0!3m2!1sen!2sbd!4v1636891437958!5m2!1sen!2sbd"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="BOU Map"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className="text-center py-3 mt-4 text-black"
          style={{ backgroundColor: "#cccccc" }}
        >
          <p className="mb-0">
            © 2024 Bangladesh Open University. All Rights Reserved. Developed &
            Maintained by Computer Division, BOU.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
