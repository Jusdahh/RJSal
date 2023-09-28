import React from "react";
import Produtos from "./Produtos";


export default function Home() {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img src="/assets/banner2.jpg" class="card-img" alt="background" height="550px"/>
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">  
          <h5 class="card-title display-3 fw-bolder mb-0">RJSAIS</h5>
          <p class="card-text lead fs-2">
            Trazendo mais sabor pra você!
          </p>
          </div>
        </div>
      </div>
      <Produtos />
    </div>
  );
}