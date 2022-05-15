import { useState } from "react";

const useInput = (value) => {
  const [val, setVal] = useState(value || "");

  const onChange = (e) => {
    setVal(e.target.value);
  };

  return { value: val, onChange };
};

export default useInput;
