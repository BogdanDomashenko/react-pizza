import React from "react";
import LoginForm from "../components/Forms/LoginForm";
import {useSelector} from "react-redux";
import {Loader} from "../components";

const SignIn = () => {
	const { isLoading } = useSelector(state => state.user);

	return (
		<div className="container container--medium">
			{ isLoading ? <Loader /> : <LoginForm /> }
		</div>
	);
};

export default SignIn;
