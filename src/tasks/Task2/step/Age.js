import React from "react";

const Age = React.forwardRef(({ onChange, name, type }, ref) => {
  return (
    <>
      <label htmlFor={name}>=!=!= {name} =!=!=</label>
      <input ref={ref} id={name} type={type} name={name} onChange={onChange} />
    </>
  );
});

export default Age;
