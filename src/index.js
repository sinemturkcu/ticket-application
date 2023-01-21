import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/navbar'
import SelamAdmin from './pages/SelamAdmin';
import SelamUser from './pages/SelamUser';

<script
  src="https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"
  integrity="sha512-MY2jfK3DBnVzdS2V8MXo5lRtr0mNRroUI9hoLVv2/yL3vrJTam3VzASuKQ96fLEpyYIT4a8o7YgtUs5lPjiLVQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>;

class MyElement extends React.Component {
  render() {
    return (
  
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selamAdmin" element={<SelamAdmin />} />
        <Route path="/selamUser" element={<SelamUser />} />
    
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
    )}}
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<MyElement />);