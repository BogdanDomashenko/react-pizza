import { useState } from "react";

const useCheckbox = (value) => {
  const [checked, setChecked] = useState(value || "");

  const onChange = (e) => {
    setChecked(e.target.value);
  };

  const toggleChecked = () => {
    console.log("1");
    setChecked(!checked);
  };

  return { checked: checked, onChange, toggleChecked };
};

export default useCheckbox;
