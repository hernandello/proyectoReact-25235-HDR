import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; 
import '../App.css'

const Footer = () => {
  return (
    <footer className="custom-footer text-white text-center py-4 mt-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="footer-brand mb-1"> Shine</p>
            <p className="footer-address mb-0">Avenida Brillantes 679, Copetonas</p>
          </Col>

          <Col md={6}>
            <div className="footer-social">
              <a href="#" className="social-link me-3">
                <i className="fa fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="social-link me-3">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fa fa-instagram fa-2x"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider my-3" />

        <Row>
          <Col>
            <small className="footer-copy">
              © {new Date().getFullYear()} Shine — Todos los derechos reservados.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

