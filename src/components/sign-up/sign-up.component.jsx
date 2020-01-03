import React, {useState} from 'react';
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custombutton/custombutton-component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title"> I do not have a account </h2>
      <span> Sign up with your email and password </span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <CustomButton type="submit"> sign up </CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: user => dispatch(signUpStart(user))
})

export default connect(null, mapDispatchToProps)(SignUp);