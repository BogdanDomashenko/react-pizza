import classNames from "classnames";
import React from "react";

function Input(props) {
	return (
		<div
			className={classNames("input", props.className, {
				"input--with-icon": props.icon,
				"input--error": props.error,
			})}
		>
			{props.label ? <div className="input__label">{props.label}</div> : ""}
			<div className="input__icon">{props.icon}</div>
			<input {...props} />
			{props.error ? <span className="input__error">{props.error}</span> : ""}
		</div>
	);
}

export default Input;
