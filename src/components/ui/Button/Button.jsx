import React from "react";
import classNames from "classnames";

const Button = ({ children, onClick, className, outline, type = "button" }) => {
	return (
		<button
			type={type}
			className={classNames("button button--default ", className, {
				"button-outline": outline,
			})}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
