import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

function TaxSummary({ taxDetails }) {
    return (
        <Container>
            <Row>
                <Col>
                    <Card className="my-4">
                        <Card.Header as="h4">Tax Summary</Card.Header>
                        <Card.Body>
                            {/* Display tax details using Card.Text and other relevant Bootstrap components */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default TaxSummary;
