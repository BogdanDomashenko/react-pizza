import { useState } from "react";

const useInput = (value) => {
  const [checked, setChecked] = useState(value || "");

  const onChange = (e) => {
    setChecked(e.target.value);
  };

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return { checked: checked, onChange, toggleChecked };
};

export default useInput;
