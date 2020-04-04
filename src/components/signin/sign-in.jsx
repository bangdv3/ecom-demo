import React, { Component } from 'react';
import FormInput from '../form-input/form-input';

import './sign-in.scss'
import ButtonRect from '../button-rect/button-rect';
import { signInWithGoogle } from '../../firebase/firebase';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
      }
  }
  onChangeValue = (e)=> {
    const {name, value} = e.target; 
    this.setState({[name] : value});
  }

  handleSubmit() {
    this.setState({
      email: '',
      password: ''
    });
  }
  render() { 
    return ( 
      <div className='sign-in' >
        <h2 className='title'>I have an account</h2>
        <span>continue with this</span>
        <form  onSubmit={this.handleSubmit} className='form-input'>
          
          <FormInput 
            name='email' 
            type='email' 
            value={this.state.email} 
            onChange={this.onChangeValue}
            label='Email'
            required /> 
          
          <FormInput 
            name='password' 
            type='password' 
            value={this.state.password} 
            onChange={this.onChangeValue}
            label='Password'
            required /> 
          <div className='buttons'>
            <ButtonRect btnLabel = 'Sign in' type='submit' />
            <ButtonRect btnLabel = 'Sign in with Google' 
              onClick={signInWithGoogle}
              isGoogleSignIn={true}
              /> 
          </div>
        </form>
      </div>
     );
  }
}
 
export default SignIn;