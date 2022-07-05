import React from "react";

const Name = React.forwardRef(
  ({ value, errors, onBlur, onChange, name, type, nextStep }, ref) => {
    return (
      <>
        <label htmlFor={name}>=!=!= {name} =!=!=</label>
        <input
          ref={ref}
          id={name}
          value={value}
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete="off"
          autoFocus
        />
        {errors && <p>Too short</p>}

        <div>
          <button onClick={nextStep} disabled={errors}>
            next
          </button>
        </div>
      </>
    );
  }
);

export default Name;
