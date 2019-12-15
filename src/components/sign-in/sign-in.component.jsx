import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custombutton/custombutton-component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
          auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: "", password: "" });
        }catch(error) {
          console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
          <div className="sign-in">
            <h2 className="title"> I already have an account </h2>
            <span>Sign in with your email and password</span>
            <form className='sign-in-form' onSubmit={this.handleSubmit}>
              <FormInput
                name="email"
                type="email"
                label="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <FormInput
                name="password"
                type="password"
                label="passsword"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <div className="buttons">
                <CustomButton type="submit"> sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                  {" "}
                  Google{" "}
                </CustomButton>
              </div>
            </form>
          </div>
        );
    }
}

export default SignIn;