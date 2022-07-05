import { useState } from "react";

const useInputsBasic = () => {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const reset = () => {
    setInputValue("");
  };

  return {
    value: inputValue,
    inputValueHandler: inputChangeHandler,
    resetInput: reset,
  };
};

export default useInputsBasic;
