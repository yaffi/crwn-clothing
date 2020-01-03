import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custombutton/custombutton-component';

import { googleSingInStart, emailSingInStart } from '../../redux/user/user.actions'

import './sign-in.styles.scss';

const SignIn = ({ googleSingInStart, emailSingInStart }) => {
  
  const [userCredentials, setCredentials] = useState({ email: '', password: '' })

  const { email, password } = userCredentials;

  const handleSubmit = event => {
    event.preventDefault();

    emailSingInStart(email, password);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  }
        
  return (
    <div className="sign-in">
      <h2 className="title"> I already have an account </h2>
      <span>Sign in with your email and password</span>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
        　onChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="passsword"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> sign in </CustomButton>
          <CustomButton type="button" onClick={googleSingInStart} isGoogleSignIn>Google</CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSingInStart: () => dispatch(googleSingInStart()),
  emailSingInStart: (email, password) => dispatch(emailSingInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);