import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Login from './components/Login';
import Produtos from './components/Produtos';
import Register from './components/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);


