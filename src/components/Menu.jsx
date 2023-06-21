import React from 'react'
import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <nav class="navbar">
        <div class="navbarContainer">
            <a href="/" id="navbarLogo"> <i class="fa-solid fa-helmet-safety"></i> RJSais</a>
            <div class="navbarToggle" id="mobileMenu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul class="navbarMenu">
                <li class="navbarItem">
                    <Link to="/">Home</Link>
                </li>
                <li class="navbarItem">
                    <Link to="/produtos">Produtos</Link>
                </li>
                <li class="navbarItem">
                    <a href="./pages/sobre.html" class="navbarLinks">Quem somos</a>
                </li>
                <li class="navbarBtn">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
