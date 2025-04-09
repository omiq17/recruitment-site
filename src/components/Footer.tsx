import { MAX_CONTENT_WIDTH } from "@/lib/consts";

export default function Footer() {
  const iconStyle = { fontSize: "1.5rem" };
  const textStyle = "text-white text-decoration-none fs-6 lh-base mb-20";

  return (
    <div id="footer" className="container-fluid bg-primary">
      <div
        className="container-fluid g-0 py-6"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <div className="row g-0">
          {/* Company Info & Social */}
          <div className="col-12 col-md-3 pe-2 mb-30 mb-md-0 text-center text-md-start">
            <p className="mb-30 text-white fs-8 lh-base fw-bold">
              Software Recruitment co.
            </p>

            <div className="d-flex justify-content-center justify-content-md-start gap-20">
              <a href="#" className="text-white" aria-label="LinkedIn">
                <i className="bi bi-linkedin" style={iconStyle}></i>
              </a>
              <a href="#" className="text-white" aria-label="Facebook">
                <i className="bi bi-facebook" style={iconStyle}></i>
              </a>
              <a href="#" className="text-white" aria-label="Instagram">
                <i className="bi bi-instagram" style={iconStyle}></i>
              </a>
              <a href="#" className="text-white" aria-label="Twitter">
                <i className="bi bi-twitter" style={iconStyle}></i>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="col-6 col-md-3 pe-2 mb-30 mb-md-0">
            <h4 className="fw-bold mb-30 text-white">Explore</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className={textStyle}>
                  Homepage
                </a>
              </li>
              <li>
                <a href="#" className={textStyle}>
                  For jobseekers
                </a>
              </li>
              <li>
                <a href="#" className={textStyle}>
                  For clients
                </a>
              </li>
              <li>
                <a href="#" className={textStyle}>
                  Our sectors
                </a>
              </li>
              <li>
                <a href="#" className={textStyle}>
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className={textStyle}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div className="col-6 col-md-3 pe-2 mb-30 mb-md-0">
            <h4 className="fw-bold mb-30 text-white">Sectors</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className={textStyle}>
                  Software engineering
                </a>
              </li>
              <li>
                <a href="#" className={textStyle}>
                  DevOps
                </a>
              </li>
              <li>
                <a href="#" className={textStyle}>
                  Cloud
                </a>
              </li>
              <li>
                <a href="#" className={textStyle}>
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className={textStyle}>
                  Testing
                </a>
              </li>
              <li>
                <a href="#" className={textStyle}>
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-12 col-md-3">
            <h4 className="fw-bold mb-30 text-white">Services</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className={textStyle}>
                  Nav item
                </a>
              </li>
              <li>
                <a href="#" className={textStyle}>
                  Nav item
                </a>
              </li>
              <li>
                <a href="#" className={textStyle}>
                  Nav item
                </a>
              </li>
              <li>
                <a href="#" className={textStyle}>
                  Nav item
                </a>
              </li>
              <li>
                <a href="#" className={textStyle}>
                  Nav item
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
