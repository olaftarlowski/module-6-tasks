import React from "react";

const Age = React.forwardRef(
  (
    { value, errors, onBlur, onChange, name, type, nextStep, prevStep },
    ref
  ) => {
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
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "center",
          }}
        >
          <button onClick={nextStep} disabled={errors}>
            next
          </button>
          <button onClick={prevStep}>prev</button>
        </div>
      </>
    );
  }
);

export default Age;
