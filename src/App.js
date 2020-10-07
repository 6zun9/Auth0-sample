import React from 'react';
import Profile from './profile';
import LoginButton from './login';
import LogoutButton from './logout';




function App() {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  )
};

export default App;
