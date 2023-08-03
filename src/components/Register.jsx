import React, { useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";

let Register = () => {
  let [state, setState] = useState({
    user: {
      username: "",
      email: "",
      password: "",
    },
  });
  let updateInput = (e) => {
    setState({
      ...state,
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    });
  };
  let Register = (e) => {
    e.preventDefault();
    console.log(state.user);
  };
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={3}>
            <Card className="shadow-lg">
              <Card.Header
                className="p-3"
                style={{ backgroundColor: "orange" }}
              >
                <h4>Register</h4>
              </Card.Header>
              <Card.Body style={{ backgroundColor: "f7f5f0" }}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="username"
                      onChange={updateInput}
                      type="text"
                      placeholder="Username"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="email"
                      onChange={updateInput}
                      type="email"
                      placeholder="E-mail"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="password"
                      onChange={updateInput}
                      type="password"
                      placeholder="Password"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Button
                      onClick={Register}
                      style={{ backgroundColor: "orange" }}
                      variant="warning"
                      type="submit"
                    >
                      Register
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
