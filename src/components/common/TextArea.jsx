import React from "react";

function TextArea({ name, placeholder, errors, rows, onChange }) {
  return (
    // <div className="mb-3">
    //   <textarea
    //     className="form-control"
    //     name={name}
    //     id={name}
    //     style={{ width: "100%" }}
    //     rows={rows}
    //     placeholder={placeholder}
    //     {...register(name)}
    //     onChange={onChange}
    //   />

    //   <span className="errors">{errors[name]?.message}</span>
    // </div>

    <div className="mb-3">
      <textarea
        className="form-control"
        name={name}
        id={name}
        style={{ width: "100%" }}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
      />

      <p className="errors text-start">{errors[name]}</p>
    </div>
  );
}

export default TextArea;
