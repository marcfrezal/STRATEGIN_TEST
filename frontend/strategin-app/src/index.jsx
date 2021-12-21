import React from 'react';
import { render } from "react-dom";
import './index.css';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import UserList from './pages/Users/Users';
import Error from './components/Error/Error';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

render(
      <React.StrictMode>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/register" element={<Register/>}/>
              <Route exact path="/users" element={<UserList/>}/>
              <Route path="*" element={<Error/>}/>
            </Routes>
          </Router>
      </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
