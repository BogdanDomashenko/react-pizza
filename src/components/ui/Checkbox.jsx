import React from "react";
import PropTypes from "prop-types";

const Checkbox = (props) => {
  return (
    <div className="checkbox">
      <input type="checkbox" {...props} />
    </div>
  );
};

Checkbox.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default Checkbox;
