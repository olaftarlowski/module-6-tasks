import React from "react";
// import styled from "styled-components";

// const InputHookWrapper = styled.div`
//   display: flex;
//   /* flex-direction: column; */

//   label {
//     width: 100%;
//     text-transform: capitalize;
//   }

//   input {
//     cursor: pointer;
//     width: 24px;
//     height: 24px;
//     font-size: 24px;
//     border: 2px solid ${(props) => (props.error ? "#b40e0e" : "#fff")};

//     &:focus {
//       outline: none;
//       border-color: #fcba03;
//       background-color: #e0d4fd;
//     }
//   }
// `;

const InputStep = React.forwardRef(
  ({ hasError, value, label, onChange, onBlur, name, type }, ref) => {
    // console.log(value);
    // console.log(name)

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
