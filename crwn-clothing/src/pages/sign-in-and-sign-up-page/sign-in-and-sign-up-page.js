import React from "react";
import SignIn from "../../components/sign-in/sign-in";

import SignUp from "../../components/sign-up/sign-up";
import "./sign-in-and-sign-up-page.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    {/* Signin and Signup page */}
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
