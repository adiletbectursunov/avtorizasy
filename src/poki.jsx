import React, {useContext, useEffect,  useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

const  reduscerEmail = (prevState, action) => {
    if(action.type === 'USER-INPUT'){
      return{
          value:action.val,
          isValid: action.val.includes( '@')
      }
    } if (action.type === 'ON-BLUR' ){
      return{
        value: prevState.value,
        isValid: prevState.value.includes('@')
      }
    }
     else {
      return {
        value: '',
        isValid: false,
      }
    }
} 
const  reduscerPassword = (prevState, action) => {
    if(action.type === 'USER-INPUT'){
      return{
          value:action.val,
          isValid: action.val.trim().length > 6
      }
    } if (action.type === 'ON-BLUR' ){
      return{
        value: prevState.value,
        isValid: prevState.value.trim().length  > 6
      }
    }
     else {
      return {
        value: '',
        isValid: false,
      }
    }
} 
const Login = () => {
const cxtData = useContext(AuthContext)

  const [emailState, dispathEmail] = useReducer(reduscerEmail, {
      value: '',
      isValid: false,
  });
const [passwordState, dispatchPassword] = useReducer(reduscerPassword, {
  value: '',
  isValid: false
})

  const [formIsValid, setFormIsValid] = useState(false);


   useEffect (() => {
    // debouncing
    const identifier  = setTimeout(() => {
      console.log('Valid');
    setFormIsValid(emailState.value.includes('@') && passwordState.value.trim().length > 6 )
    }, 1000)
    //clean up function
    return  () => {
        console.log('clean-up');
      clearTimeout(identifier)
    }
   }, [ setFormIsValid,  emailState.value, passwordState.value])
   
  const emailChangeHandler = (event) => {
      dispathEmail({type: 'USER-INPUT', val: event.target.value})

      
    setFormIsValid(
      event.target.value.includes('@') && passwordState.value.trim().length > 6
    )
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({pype: 'USER-INPUT', val: event.target.value})


    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.value.includes('@')
    );
  };

  const validateEmailHandler = () => {
    dispathEmail({type: 'ON-BLUR'})

  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'ON-BLUR' })

  };

  const submitHandler = (event) => {
    event.preventDefault();
    cxtData.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
 }
export default Login;