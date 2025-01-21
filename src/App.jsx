import { useState } from 'react';
import UserContextProvider from "./userContext/UserContextProvider"

import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
function App() {

  return (
     
 <UserContextProvider>
    <h1 className="text-red">Test</h1>
      <Login/>
      <Profile />
      </UserContextProvider>
    
  
  )

}

export default App;
