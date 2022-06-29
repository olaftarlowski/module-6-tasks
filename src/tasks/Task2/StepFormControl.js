import React, { useState } from "react";
import {
  Name,
  Age,
  Interests,
  Card,
  // useInputHook,
} from "./step";

import { useForm } from "react-hook-form";
import Summary from "./step/Summary";
// import InputStep from "./step/InputStep";

const StepFormControl = () => {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // console.log(errors);

  const prevStep = () => {
    if (step === 1) {
      return;
    }
    setStep((prevState) => prevState - 1);
  };

  const nextStep = () => {
    if (step === 4) {
      return;
    }
    setStep((prevState) => prevState + 1);
  };

  // console.log(step);

  const currentStep = () => {
    switch (step) {
      case 1:
        return (
          <Card>
            <p>Step 1</p>
            <Name
              {...register("name", { required: true, maxLength: 20 })}
              hasError={errors.name}
              type="text"
            />
          </Card>
        );
      case 2:
        return (
          <Card>
            <p>Step 2</p>
            <Age
              {...register("age", { required: true })}
              hasError={errors.age}
              type="number"
            />
          </Card>
        );
      case 3:
        return (
          <Card>
            <p>Step 3</p>
            <Interests
              {...register("interests", { required: true })}
              hasError={errors.interests}
              type="text"
            />
          </Card>
        );
      case 4:
        return (
          <Card>
            <p>Step 4</p>
            <Summary />
          </Card>
        );
      default:
        return <p>something went wrong</p>;
    }
  };

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
        {currentStep()}

        <input type="submit" />
      </form>

      <button onClick={prevStep}>prev</button>
      <button onClick={nextStep}>next</button>
    </div>
  );
};

export default StepFormControl;

// import React, { useState } from "react";
// import { Name, Age, Interests, useInputHook, Card } from "./step";

// const StepFormControl = () => {
//   const [step, setStep] = useState(1);

//   const {
//     value: nameField,
//     inputValueHandler: nameFieldChangeHandler,
//     resetInput: nameFieldReset,
//   } = useInputHook();

//   const {
//     value: ageField,
//     inputValueHandler: ageFieldChangeHandler,
//     resetInput: ageFieldReset,
//   } = useInputHook();

//   const {
//     value: interestsField,
//     inputValueHandler: interestsFieldChangeHandler,
//     resetInput: interestsFieldReset,
//   } = useInputHook();

//   const prevStep = () => {
//     if (step === 1) {
//       return;
//     }
//     setStep((prevState) => prevState - 1);
//   };

//   const nextStep = () => {
//     if (step === 3) {
//       return;
//     }
//     setStep((prevState) => prevState + 1);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();

//     console.log(nameField, ageField, interestsField);

//     nameFieldReset();
//     ageFieldReset();
//     interestsFieldReset();
//   };

//   // console.log(step);

//   const currentStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <Card>
//             <Name value={nameField} onchange={nameFieldChangeHandler} />
//           </Card>
//         );
//       case 2:
//         return (
//           <Card>
//             <Age value={ageField} onchange={ageFieldChangeHandler} />
//           </Card>
//         );
//       case 3:
//         return (
//           <Card>
//             <Interests
//               value={interestsField}
//               onchange={interestsFieldChangeHandler}
//             />
//           </Card>
//         );
//       default:
//         return <p>za duzo albo za mao</p>;
//     }
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", width: 300 }}>
//       <form
//         onSubmit={submitHandler}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           textAlign: "center",
//           marginBottom: 50,
//         }}
//       >
//         {currentStep()}
//         <input type="submit" />
//       </form>
//       <button onClick={prevStep}>prev</button>
//       <button onClick={nextStep}>next</button>
//     </div>
//   );
// };

// export default StepFormControl;

// PROBA CURERENT STEP

// const currentStep = () => {
//   switch (step) {
//     case 1:
//       return (
//         <Card>
//           <p>card1</p>
//           <InputStep
//             {...register("name", { required: true, maxLength: 20 })}
//             hasError={errors.name}
//             type="text"
//           />
//           {/* <Name value={nameField} onchange={nameFieldChangeHandler} /> */}
//         </Card>
//       );
//     case 2:
//       return (
//         <Card>
//           <p>card2</p>
//           <InputStep
//             {...register("age", { required: true })}
//             hasError={errors.age}
//             type="number"
//           />
//           {/* <Age value={ageField} onchange={ageFieldChangeHandler} /> */}
//         </Card>
//       );
//     case 3:
//       return (
//         <Card>
//           <p>card3</p>
//           <InputStep
//             {...register("interests", { required: true })}
//             hasError={errors.interests}
//             type="text"
//           />
//           {/* <Interests
//             value={interestsField}
//             onchange={interestsFieldChangeHandler}
//           /> */}
//         </Card>
//       );
//     default:
//       return <p>za duzo albo za mao</p>;
//   }
// };
