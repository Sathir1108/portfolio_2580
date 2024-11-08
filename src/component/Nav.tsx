import { useEffect, useState } from "react";
import "../CSS/Navbar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkScrollPosition = () => {
      // Updates the state when user scrolls down
      setHasScrolled(window.scrollY === 0);
    };

    window.addEventListener("scroll", checkScrollPosition);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <div className="navbar-1">
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled ? "navbar-scrolled" : "navbar"
        }`}
      >
        <div className="container-fluid">
          <div className="navc-1">
            <p className="navbar-brand">
              <a
                href="https://www.linkedin.com/in/sathir-ahamed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon id="navbar-brand" />
              </a>
              <a href="#home" id="home-link">
                SATHIR AHAMED
              </a>
            </p>
          </div>
          <div className="navc-3">
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
          </div>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className={`nav-link ${hasScrolled ? "scrolled" : ""}`} // Conditionally add a class
                  spy={true}
                  activeClass="nav-underline"
                  offset={-50}
                >
                  HOME
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="service"
                  smooth={true}
                  duration={500}
                  className="nav-link "
                  spy={true}
                  activeClass="nav-underline"
                  offset={-50}
                >
                  SERVICES
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  spy={true}
                  activeClass="nav-underline"
                  offset={-50}
                >
                  SKILLS
                </ScrollLink>
              </li>

              <li className="nav-item">
                <ScrollLink
                  to="project"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  spy={true}
                  activeClass="nav-underline"
                  offset={-50}
                >
                  PROJECTS
                </ScrollLink>
              </li>

              <li className="nav-item">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  spy={true}
                  activeClass="nav-underline"
                  offset={-50}
                >
                  CONTACT
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div className="navc-2">
            <button
              className="btn btn-primary "
              id="nav"
              onClick={scrollToContact}
            >
              CONTACT NOW
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
