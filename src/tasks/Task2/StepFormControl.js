import React, { useEffect, useState } from "react";
import { Name, Age, Interests, Card, Summary } from "./step";

import { useForm } from "react-hook-form";

const StepFormControl = () => {
  const [step, setStep] = useState(1);
  const [currentWatch, setCurrentWatch] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      age: "",
      interests: "",
    },
  });

  const Steps = {
    INIT: 1,
    NAME: 2,
    AGE: 3,
    SUMMARY: 4,
    FINAL: 5,
  };

  const onSubmit = (data) => {
    console.log(data);
    setStep(5);
  };

  const prevStep = () => {
    if (step === 1) {
      return;
    }
    setStep((prevState) => prevState - 1);
  };

  const nextStep = () => {
    if (step >= 4) {
      return;
    }
    setStep((prevState) => prevState + 1);
  };

  const currentStep = () => {
    switch (step) {
      case Steps.INIT:
        return (
          <>
            <p>Step {step}</p>
            <Name
              watchName={currentWatch.name}
              nextStep={nextStep}
              errors={errors.name}
              autoComplete="disabled"
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
              type="text"
            />
          </>
        );
      case Steps.NAME:
        return (
          <>
            <p>Step {step}</p>
            <Age
              prevStep={prevStep}
              nextStep={nextStep}
              errors={errors.age}
              {...register("age", {
                required: true,
              })}
              type="number"
            />
          </>
        );
      case Steps.AGE:
        return (
          <>
            <p>Step {step}</p>
            <Interests
              prevStep={prevStep}
              nextStep={nextStep}
              errors={errors.interests}
              {...register("interests", {
                required: true,
                minLength: 3,
                maxLength: 50,
              })}
              type="text"
            />
          </>
        );
      case Steps.SUMMARY:
        return (
          <>
            <p>Step {step}</p>
            <Summary prevStep={prevStep} currentData={currentWatch} />
          </>
        );
      case Steps.FINAL:
        return (
          <>
            <p>Your form has been successfully submitted</p>
            <p>Thank you!</p>
          </>
        );
      default:
        return <p>something went wrong</p>;
    }
  };

  useEffect(() => {
    const subscription = watch((data) => setCurrentWatch(data));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 300 }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          marginBottom: 50,
        }}
      >
        <Card>{currentStep()}</Card>
      </form>
    </div>
  );
};

export default StepFormControl;
