import React from 'react'
import { Button } from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
export const AddForm = () => {
  return (
    <div>
      <Form>
        <Row className="g-2">
          <Col md={6}>
            <Form.Control placeholder="Task name" required />
          </Col>
          <Col md={4}>
            <Form.Control placeholder="hrs" required type="number" /> 
          </Col>
          <Col md={2}>
            <Button variant="success" required type="submit">
              Add task
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
