import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';


// form for entering login information and logging in

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    if (!email || !password) {

      return

    }



    Meteor.loginWithPassword(email, password, error => {



      alert(error ? error : 'Logged in successfully')



      setEmail('')
      setPassword('')

      document.querySelector('#login-password-input').value = ''
      document.querySelector('#login-email-input').value = ''


    })






  };

  return (


    
<div className="form-container">
      <label className="form-label" htmlFor="login-form"> Login</label>

      <form onSubmit={submit} className="login-form">
        <label htmlFor="email">Email</label>

        <input
          id='login-email-input'
          type="email"
          placeholder="Email"
          name="email"
          required
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>

        <input
          id='login-password-input'
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Log In</button>
      </form>

      </div>

  );
};