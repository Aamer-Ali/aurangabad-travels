import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";

function Input({
  type,
  name,
  placeholder,
  errors,
  min,
  onChange,
  disabled,
  value,
}) {
  return (
    <div className="mb-3">
      {/* <input
        className="form-control"
        type={type}
        name={name}
        min={min}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
      />
      <p className="errors text-start">{errors[name]}</p> */}
      {/* <Form.Group controlId={name}> */}
      <Form.Group controlId={name}>
        {/* <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2 col-xlg-2 col-12">
            <Form.Label className="text-start" style={{ width: "100%" }}>
              {placeholder}
            </Form.Label>
          </div>
          <div className="col-sm-10 col-md-10 col-lg-10 col-xlg-10 col-12"> */}
        <FloatingLabel label={placeholder}>
          <Form.Control
            name={name}
            id={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value && value}
            disabled={disabled}
          ></Form.Control>
        </FloatingLabel>
        {/* </div> */}
        {/* </div> */}
      </Form.Group>
      <p className="errors text-start">{errors[name]}</p>
    </div>
  );
}

export default Input;
