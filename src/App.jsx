import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
     <>
    <h1 className="text-red">Test</h1>
    <Login/>
    </>
  );
}

export default App;
