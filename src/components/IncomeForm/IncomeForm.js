import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function IncomeForm({ onSubmit }) {
    const [incomeData, setIncomeData] = useState({ /* initial state */ });

    const handleChange = (event) => {
        // Update incomeData based on user input
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(incomeData);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="my-4">Enter Your Income Details</h2>
                    <Form onSubmit={handleSubmit}>
                        {/* Add form fields using Form.Group, Form.Label, and Form.Control components */}
                        <Button variant="primary" type="submit">
                            Calculate Tax
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default IncomeForm;
