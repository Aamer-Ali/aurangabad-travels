import React from "react";

// function Input({ type, name, placeholder, register, errors, min, onChange }) {
//   return (
//     <div className="mb-3">
//       <input
//         className="form-control"
//         type={type}
//         name={name}
//         min={min}
//         placeholder={placeholder}
//         {...register(name)}
//         onChange={onChange}
//       />
//       <span className="errors">{errors[name]?.message}</span>
//     </div>
//   );
// }

function Input({ type, name, placeholder, errors, min, onChange }) {
  return (
    <div className="mb-3">
      <input
        className="form-control"
        type={type}
        name={name}
        min={min}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className="errors text-start">{errors[name]}</p>
    </div>
  );
}

export default Input;
