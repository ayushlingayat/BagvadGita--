import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/gfl-logo.png";
import style from "./Topbar.module.css";
import togglelogo from "../assets/mandala-toggle.png";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <Navbar expand="md" className={`bg-body-tertiary py-0`}>
      <Container className={style.bgtopbar} fluid>
        <Navbar.Brand className={` ${style.colorNavBrand} ms-4`} href="#">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          BagvadGita
        </Navbar.Brand>
        <Navbar.Toggle
          className="btn"
          aria-controls="offcanvasNavbar-expand-md"
        >
          <img
            alt=""
            src={togglelogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
        >
          <Offcanvas.Header className={style.bgtopbar} closeButton>
            <Offcanvas.Title
              className={style.colorNavBrand}
              id="offcanvasNavbarLabel-expand-md"
            >
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Gita For Life
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={style.bgtopbar}>
            <Nav className={`justify-content-center flex-grow-1 pe-3 `}>
              <Nav.Link>
                <NavLink className={`mx-3 ${style.colortopbar}`} to="/">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className={`mx-3 ${style.colortopbar}`} to="/Chapter">
                  Chapter
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className={`mx-3 ${style.colortopbar}`} to="/Sloka">
                  Sloka
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={`mx-3 ${style.colortopbar}`}
                  to="/Mahabharat"
                >
                  Mahabharat
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className={`mx-3 ${style.colortopbar}`} to="/Ramayan">
                  Ramayan
                </NavLink>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Topbar;
