import React, { useState, useEffect } from "react";
import { Card, Col, Form, Row, Button } from "react-bootstrap";

function BranchMaster() {
  const [branch, setBranch] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendDataToServer();
    }
  }, [formErrors]);

  const addBranch = () => {
    setFormErrors(handleErrors());
    setIsSubmit(true);
  };

  const sendDataToServer = async () => {
    console.log("Uploading");
  };

  const handleErrors = () => {
    const errors = {};
    if (branch === "") {
      errors.branchName = "Please provide branch name";
    } else if (branch.length < 3) {
      errors.branchName = "Please provide proper branch name";
    }
    return errors;
  };

  return (
    <div>
      <Row className="justify-content-center mt-5">
        <Col xs={4} xl={4} md={4} sm={4}>
          <Card>
            <Card.Body>
              <Card.Title>Add new Branch</Card.Title>
              <Form>
                <Form.Group controlId="branchGroup">
                  <Form.Label className="text-start" style={{ width: "100%" }}>
                    Branch Name
                  </Form.Label>
                  <Form.Control
                    name="branchName"
                    type="text"
                    placeholder="Branch Name"
                    onChange={(e) => {
                      setBranch(e.currentTarget.value);
                    }}
                  ></Form.Control>
                </Form.Group>
                <p className="errors text-start">{formErrors.branchName}</p>
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

export default BranchMaster;
