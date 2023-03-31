import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';

function ITRFormRecommendation({ formName }) {
    return (
        <Container>
            <Row>
                <Col>
                    <Alert variant="success" className="my-4">
                        Based on your inputs, we recommend you to fill the <strong>{formName}</strong> form.
                    </Alert>
                </Col>
            </Row>
        </Container>
    );
}

export default ITRFormRecommendation;
