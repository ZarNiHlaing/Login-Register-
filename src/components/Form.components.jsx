import React from "react";

const FormComponents = ({ type, name, label ,placeholder="" , ...rest }) => {
  return (
    <div className="flex flex-col">
      <label className="text-lg" htmlFor={name}>{label}</label>
      <input {...rest} className="p-3 rounded mt-2 border-2 border-blue-500" type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
};

export default FormComponents;
