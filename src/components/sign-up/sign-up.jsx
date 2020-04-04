import React, { Component }  from 'react';
import {auth, fireCreateUser} from '../../firebase/firebase'
import FormInput from '../form-input/form-input';
import ButtonRect from '../button-rect/button-rect';
import './sign-up.scss'



class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  onChangeValue = (e)=> {
    const {name, value} = e.target; 
    this.setState({[name] : value});
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state
    if (password != confirmPassword) {
      alert('password must be matched')
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await fireCreateUser(user, {displayName})
      this.setState({ 
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

    } catch (error) {

    }

  }

  render() { 
    return ( 
      <div className='sign-up' >
        <h2 className="title"> I Dont have an account</h2>
        <span >Sign up with email and password</span>
        <form className='sign-up-form' onSubmit= {this.handleSubmit}>
          <FormInput
            name= 'displayName' type ='text' 
            value={this.state.displayName} 
            label='Name' 
            onChange={this.onChangeValue}
          />
          <FormInput
            name= 'email' type ='email' 
            value={this.state.email} 
            label='Email' 
            onChange={this.onChangeValue}
            required
          />
          <FormInput
            name= 'password' type ='password' 
            value={this.state.password} 
            label='Password' 
            onChange={this.onChangeValue}
          />
          <FormInput
            name= 'confirmPassword' type ='password' 
            value={this.state.confirmPassword} 
            label='Confirm password' 
            onChange={this.onChangeValue}
          />
          <ButtonRect type='submit' btnLabel='Sign up' />
        </form>
        
      </div>
     );
  }
}
 
export default SignUp;