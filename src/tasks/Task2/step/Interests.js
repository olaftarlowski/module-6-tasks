import React from "react";

const Interests = React.forwardRef(({ onChange, name, type }, ref) => {
  return (
    <>
      <label htmlFor={name}>=!=!= {name} =!=!=</label>
      <input ref={ref} id={name} type={type} name={name} onChange={onChange} />
    </>
  );
});

export default Interests;
