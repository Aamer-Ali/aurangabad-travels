import React, { useState, useEffect } from "react";
import { Card, Col, Form, Row, Button } from "react-bootstrap";

function PlaceMaster() {
  const [place, setPlace] = useState("");
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
    if (place === "") {
      errors.placeName = "Please provide place name";
    } else if (place.length < 3) {
      errors.placeName = "Please provide proper place name";
    }
    return errors;
  };

  return (
    <div>
      <Row className="justify-content-center mt-5">
        <Col xs={4} xl={4} md={4} sm={4}>
          <Card>
            <Card.Body>
              <Card.Title>Add new Place</Card.Title>
              <Form>
                <Form.Group controlId="branchGroup">
                  <Form.Label className="text-start" style={{ width: "100%" }}>
                    Place Name
                  </Form.Label>
                  <Form.Control
                    name="placeName"
                    type="text"
                    placeholder="Place Name"
                    onChange={(e) => {
                      setPlace(e.currentTarget.value);
                    }}
                  ></Form.Control>
                </Form.Group>
                <p className="errors text-start">{formErrors.placeName}</p>
                <Button variant="success" className="mt-3" onClick={addBranch}>
                  Add Place
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PlaceMaster;
