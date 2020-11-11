import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Form } from 'react-bootstrap/';
const Contact = () => {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h1>Contact us</h1>
                        </Col>
                        <Col xs={12}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Enter first name"
                                    />
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone
                                        else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Message"
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Contact;
