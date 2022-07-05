import React from "react";

const Summary = ({ currentData, prevStep }) => {
  const { name, age, interests } = currentData;

  return (
    <div style={{ textAlign: "left", padding: 10 }}>
      <h2>Summary</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Interests: {interests}</p>

      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
        }}
      >
        <button onClick={prevStep}>prev</button>
        <button type="submit" autoFocus>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Summary;
