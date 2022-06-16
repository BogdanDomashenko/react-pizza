import React from "react";
import classNames from "classnames";

const Button = ({ children, onClick, className, outline }) => {
	return (
		<button
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
