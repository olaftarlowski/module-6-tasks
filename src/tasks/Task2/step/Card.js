import React from "react";

const style = {
  width: 300,
  heigth: 200,
  borderRadius: 20,
  background: "#f3f3f3",
  border: "2px solid blue",
  margin: "0 auto",
  color: "#000",
};

const Card = ({ children }) => {
  return (
    <div style={style}>
      {children}
      {/* <div>
        <button onClick={prevStep} disabled={errors}>
          prev
        </button>
        <button onClick={nextStep} disabled={errors}>
          next
        </button>
      </div> */}
    </div>
  );
};

export default Card;
