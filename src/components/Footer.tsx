import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="text-center bg-secondary-subtle">
      <div className="container">
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link className="fw-bold text-dark">Quick Links: </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-success" onClick={() => navigate("/")}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-success"
              onClick={() => navigate("/Chapter")}
            >
              Chapter
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-success"
              onClick={() => navigate("/Sloka")}
            >
              Sloka
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-success"
              onClick={() => navigate("/Mahabharat")}
            >
              Mahabharat
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-success"
              onClick={() => navigate("/Ramayan")}
            >
              Ramyana
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div
        className="text-center text-light p-3 bg-dark"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
         Chapter and Sloka copyright: <br/>
        <a
          className="text-light"
          href="https://rapidapi.com/bhagavad-gita-bhagavad-gita-default/api/bhagavad-gita3"
        >
           Bhagavad Gita API
        </a>
      </div>

      <div
        className="text-center text-light p-3 bg-success"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:  <br/>
        <a className="text-light" href="https://mdbootstrap.com/">
          Ayush Lingayat
        </a>
        <br />
        Made with ❤️ 
      </div>
    </footer>
  );
};

export default Footer;
