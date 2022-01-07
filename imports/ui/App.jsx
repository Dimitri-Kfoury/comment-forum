import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Dashboard } from './Dashboard';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';

export const App = () => {

  const user = useTracker(() => Meteor.user());

  return (



    <div>
      <h1>Comment Forum</h1>
      {!user && <>

        <LoginForm />
        <SignUpForm />

      </>}

      {user && <Dashboard />}



    </div>


  );
};