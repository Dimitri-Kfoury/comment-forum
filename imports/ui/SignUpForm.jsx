import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';

export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    if (!email || !password) {

      return

    }

    Accounts.createUser({ email: email, password: password }, (error) => {

      alert(error ? error : 'Account created successfully')

      setEmail('')
      setPassword('')

      document.querySelector('#signUp-password-input').value = ''
      document.querySelector('#signUp-email-input').value = ''
    })






  };

  return (


    <div className="form-container">

      <label className="form-label" htmlFor="singUp-form">Sign Up</label>
      <form onSubmit={submit} className="signUp-form">
        <label htmlFor="email">Email</label>

        <input
          id='signUp-email-input'
          type="email"
          placeholder="Email"
          name="email"
          required
          onChange={e => setEmail(e.target.value)}
        />

        <label  htmlFor="password">Password</label>

        <input
          id='signUp-password-input'
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};