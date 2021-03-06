import React, { useState, useEffect } from "react";
import { Card, Col, Form, Row, Button } from "react-bootstrap";

function ModeOfTransportMaster() {
  const [modeOfTransport, setModeOfTransport] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendDataToServer();
    }
  }, [formErrors, isSubmit]);

  const addBranch = () => {
    setFormErrors(handleErrors());
    setIsSubmit(true);
  };

  const sendDataToServer = async () => {
    console.log("Uploading");
  };

  const handleErrors = () => {
    const errors = {};
    if (modeOfTransport === "") {
      errors.modeOfTransport = "Please provide mode of transport";
    } else if (modeOfTransport.length < 3) {
      errors.modeOfTransport = "Please provide proper mode of transport";
    }
    return errors;
  };

  return (
    <div>
      <Row className="justify-content-center mt-5">
        <Col xs={4} xl={4} md={4} sm={4}>
          <Card>
            <Card.Body>
              <Card.Title>Add new Mode Of Transport</Card.Title>
              <Form>
                <Form.Group controlId="branchGroup">
                  <Form.Label className="text-start" style={{ width: "100%" }}>
                    Mode Of Transport
                  </Form.Label>
                  <Form.Control
                    name="modeOfTransport"
                    type="text"
                    placeholder="Mode Of Transport"
                    onChange={(e) => {
                      setModeOfTransport(e.currentTarget.value);
                    }}
                  ></Form.Control>
                </Form.Group>
                <p className="errors text-start">
                  {formErrors.modeOfTransport}
                </p>
                <Button variant="success" className="mt-3" onClick={addBranch}>
                  Add Branch
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ModeOfTransportMaster;
