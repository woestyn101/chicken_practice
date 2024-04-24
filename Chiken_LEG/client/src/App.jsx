import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';


function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
