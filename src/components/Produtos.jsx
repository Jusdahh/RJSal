import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const url = "https://api-sal.vercel.app/produtos";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setProdutos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return produtos.map((produto) => (
      <div key={produto.id} className="col-sm-6 col-md-4 col-lg-3">
        <div
          className="card h-100 text-center p-4 text-uppercase"
          style={{ maxWidth: "400px" }}
        >
          <img
            src={produto.imagem}
            className="card-img-top mx-auto"
            alt={produto.nome}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title mb-0">
              {produto.nome.substring(0, 12)}
            </h5>
            <p>R${produto.preco}</p>
            <Link to={`/produtos/${produto.id}`} className="btn btn-primary">
              Ver produto
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Produtos Lançamento
            </h1>
            <hr />
          </div>
        </div>

        <div className="row">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
