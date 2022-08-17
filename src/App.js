/* eslint-disable */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  // Button,
  // Accordion,
  // Dropdown,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  // Row,
  // Col,
} from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
// import data from "./components/data.jsx";
import Best from "./pages/Best";
import Main from "./pages/Main";
import About from "./pages/About";
import History from "./pages/History";
import Inform from "./pages/Inform";
import Cart from "./pages/Cart";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="app">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand
              onClick={() => {
                navigate("/");
              }}
            >
              삼진어묵
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  회사 소개
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/Best");
                  }}
                >
                  베스트
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/Cart");
                  }}
                >
                  장바구니
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <Link to={"/"}>home</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link to={"/best"} target="_blank">
                      best
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/about" element={<About />}>
            <Route path="history" element={<History />} />
            <Route path="inform" element={<Inform />} />
          </Route>
          <Route path="/best" element={<Best />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
