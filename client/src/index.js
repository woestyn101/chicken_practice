import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import "./index.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import Dashboard from './components/Dashboard.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import Chicken from './components/Chiken.jsx';
import ErrorPage from './components/ErrorPage.jsx';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Chicken" element={<Chicken />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
