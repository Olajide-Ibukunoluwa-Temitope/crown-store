import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import Header from '../../components/header/header.component';

const SignInAndSignUpPage = () => (
  <div>
    <Header isBannerlessPage={true} />
    <div className="sign-in-and-sign-up">
      <div className="sign-in-and-sign-up-container">
        <SignIn />
        <SignUp />
      </div>
    </div>
  </div>
);

export default SignInAndSignUpPage;