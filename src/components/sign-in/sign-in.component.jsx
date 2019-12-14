import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custombutton/custombutton-component';

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

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
          <div className="sign-in">
            <form onSubmit={this.handleSubmit}>
              <FormInput 
                name="email" 
                type="email" 
                label='email' 
                value={this.state.email} 
                onChange={this.handleChange} 
                required
              />
              <FormInput 
                name="password" 
                type="password" 
                label='passsword' 
                value={this.state.password} 
                onChange={this.handleChange} 
                required
              />

              <CustomButton type='submit'> sign in </CustomButton>
            </form>
          </div>
        );
    }
}

export default SignIn;