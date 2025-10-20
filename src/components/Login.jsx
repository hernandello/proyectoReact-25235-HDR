import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login enviado');
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center min-vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Card className="login-card shadow-lg p-4">
              <Card.Body>
                <h2 className="text-center mb-4 login-title">Iniciar Sesión</h2>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su usuario"
                      required
                      className="login-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Ingrese su contraseña"
                      required
                      className="login-input"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 login-btn">
                    Ingresar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;