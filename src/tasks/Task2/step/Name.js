// const Name = ({ value, onchange }) => {
//   return (
//     <>
//       <label htmlFor="name">=!=!= Name =!=!=</label>
//       <input id="name" type="text" value={value} onChange={onchange} />
//     </>
//   );
// };

// export default Name;

import React from "react";

const Name = React.forwardRef(
  (
    {
      // hasError, value, label, onBlur,
      onChange,
      name,
      type,
    },
    ref
  ) => {
    // console.log(value);
    // console.log(name)

    return (
      <>
        <label htmlFor={name}>=!=!= {name} =!=!=</label>
        <input
          ref={ref}
          id={name}
          // value={value}
          type={type}
          name={name}
          onChange={onChange}
        />
      </>
    );
  }
);

export default Name;
