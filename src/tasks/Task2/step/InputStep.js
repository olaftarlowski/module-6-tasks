import React from "react";

const InputStep = React.forwardRef(
  ({ hasError, value, label, onChange, onBlur, name, type }, ref) => {
    return (
      <div error={hasError}>
        <label htmlFor={name}>{name}: </label>
        <input
          ref={ref}
          id={name}
          // value={value}
          type={type}
          name={name}
          onChange={onChange}
          // onBlur={onBlur}
        />
      </div>
    );
  }
);

export default InputStep;
