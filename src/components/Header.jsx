import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUsersGear } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; 
import logo from '../logo2.png.png';

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar mb-4 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center brand-text">
          <img
            src={logo}
            alt="Logo"
            
          />
          <span>Shine - Lo mejor para vos</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/ofertas" className="nav-link-custom">Ofertas</Nav.Link>
            <Nav.Link as={Link} to="/destacados" className="nav-link-custom">Destacados</Nav.Link>

            <div className="d-flex align-items-center ms-3">
              <Button as={Link} to="/administracion" className="admin-btn me-2">
                <FontAwesomeIcon icon={faUsersGear} size="lg" />
              </Button>
              <Link to="/carrito" className="cart-icon">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;