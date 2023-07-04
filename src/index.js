import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import Home from './components/Home';
import Produtos from './components/Produtos';
import Produto from './components/Produto';
import Login from './components/Login';
import Register from './components/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Sobre from './components/Sobre';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route exact path="/produtos/:id" element={<Produto/>} />
      <Route path="/sobre" element={<Sobre/>}/>
    </Routes>
  </BrowserRouter>
);

