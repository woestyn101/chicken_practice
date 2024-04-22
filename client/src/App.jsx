import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar'; // Corrected import statement
import Footer from './Footer';

function App() {
  return (
    <div>
      <NavBar /> {/* Render the NavBar component */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
