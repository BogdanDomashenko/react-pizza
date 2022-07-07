import React from 'react';
import {Loader, SignUpForm} from '../components';
import {useSelector} from "react-redux";

export const SignUp = () => {
    const { isLoading } = useSelector(state => state.user);

  return (
    <div className="container container--medium">
        { isLoading ? <Loader /> :  <SignUpForm /> }
    </div>
  )
}

export default SignUp;
