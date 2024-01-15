import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { requestAuthRegister } from '../../actions/authActions';
import { addSystemToaster } from '../../actions/systemActions';
import { useNavigate } from 'react-router-dom';

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(requestAuthRegister(
            email,
            password,
            (message, type) => dispatch(addSystemToaster(message, type)),
            () => navigate('/dashboard')
        ));
    }

    return (
        <>
            <h2>Register</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>Email address</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>Password</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Submit
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default Register;