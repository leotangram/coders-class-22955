import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">My E-Commerce</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink exact to="/" activeClassName="selected">
                Inicio
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink exact to="/cart" activeClassName="selected">
                Carrito de compras
              </NavLink>
            </Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to="/category/audio" activeClassName="selected">
                  Audio
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/category/cars" activeClassName="selected">
                  Carros
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/category/video-games" activeClassName="selected">
                  Video juegos
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/category/apparel" activeClassName="selected">
                  Video juegos
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
