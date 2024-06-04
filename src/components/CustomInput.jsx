import React from "react";

const CustomInput = ({ type, name, label, i_id, i_class, val, onCh }) => {
  return (
    <div className="form-floating mt-3">
      <input type={type} className={`form-control ${i_class}`} id={i_id} placeholder={label} name={name} value={val} onChange={onCh} onBlur={onCh} />
      <label htmlFor={i_id}>{label}</label>
    </div>
  );
};

export default CustomInput;
