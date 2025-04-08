import { MAX_CONTENT_WIDTH } from "@/lib/consts";
import { MENU_ITEMS } from "@/lib/data";

const renderDropdown = (item: MenuItem) => {
  return (
    <li className="nav-item dropdown" key={item.name}>
      <a
        className="nav-link dropdown-toggle"
        href={item.link}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {item.name}
      </a>
      {item.subItems && item.subItems.length && (
        <ul className="dropdown-menu">
          {item.subItems.map((subItem) => (
            <li key={subItem.name}>
              <a className="dropdown-item" href={subItem.link}>
                {subItem.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default function Navbar() {
  return (
    <div className="container-fluid">
      <div
        className="container-fluid g-0"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid g-0">
            <a className="navbar-brand" href="#" style={{ marginRight: "5vw" }}>
              Software Recruitment Co.
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {MENU_ITEMS.map((item) => renderDropdown(item))}
              </ul>

              <div className="d-flex gap-2">
                <button type="button" className="btn btn-secondary">
                  Upload CV
                </button>
                <button type="button" className="btn btn-warning">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
