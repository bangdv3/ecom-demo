import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import './sign-page.scss'

const  SignPage = (props) =>{
  return (
    <div className="sign-page">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignPage;