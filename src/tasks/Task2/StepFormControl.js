import React, { useState } from "react";
import { Name, Age, Interests, useInputHook, Card } from "./step";

const StepFormControl = () => {
  const [step, setStep] = useState(1);

  const {
    value: nameField,
    inputValueHandler: nameFieldChangeHandler,
    resetInput: nameFieldReset,
  } = useInputHook();

  const {
    value: ageField,
    inputValueHandler: ageFieldChangeHandler,
    resetInput: ageFieldReset,
  } = useInputHook();

  const {
    value: interestsField,
    inputValueHandler: interestsFieldChangeHandler,
    resetInput: interestsFieldReset,
  } = useInputHook();

  const prevStep = () => {
    if (step === 1) {
      return;
    }
    setStep((prevState) => prevState - 1);
  };

  const nextStep = () => {
    if (step === 3) {
      return;
    }
    setStep((prevState) => prevState + 1);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(nameField, ageField, interestsField);

    nameFieldReset();
    ageFieldReset();
    interestsFieldReset();
  };

  // console.log(step);

  const currentStep = () => {
    switch (step) {
      case 1:
        return (
          <Card>
            <Name value={nameField} onchange={nameFieldChangeHandler} />
          </Card>
        );
      case 2:
        return (
          <Card>
            <Age value={ageField} onchange={ageFieldChangeHandler} />
          </Card>
        );
      case 3:
        return (
          <Card>
            <Interests
              value={interestsField}
              onchange={interestsFieldChangeHandler}
            />
          </Card>
        );
      default:
        return <p>za duzo albo za mao</p>;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 300 }}>
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          marginBottom: 50,
        }}
      >
        {currentStep()}
        <input type="submit" />
      </form>
      <button onClick={prevStep}>prev</button>
      <button onClick={nextStep}>next</button>
    </div>
  );
};

export default StepFormControl;