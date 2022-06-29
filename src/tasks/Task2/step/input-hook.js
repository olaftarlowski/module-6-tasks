import { useState } from "react";

const useInputsBasic = () => {
  const [inputValue, setInputValue] = useState("");
  //   const [isTouched, setIsTouched] = useState(false);

  //   const isValid = valueCheck(inputValue);
  //   const hasError = !isValid && isTouched;

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  //   const inputTouchedHandler = () => {
  //     setIsTouched(true);
  //   };

  const reset = () => {
    setInputValue("");
    // setIsTouched(false);
  };

  return {
    value: inputValue,
    // validity: isValid,
    // error: hasError,
    inputValueHandler: inputChangeHandler,
    // inputTouchHandler: inputTouchedHandler,
    resetInput: reset,
  };
};

export default useInputsBasic;
