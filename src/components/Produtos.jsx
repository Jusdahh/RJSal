import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Produtos() {
    const [produtos, setProdutos] = useState([])
    const url = 'http://localhost:9081/produtos'

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProdutos(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

  return (
    <div>
        {produtos.map(produto => (
            <div key={produto.id}>
                <h1>{produto.nome}</h1>
                <img src={produto.imagem} alt={produto.nome}></img>
                <p>{produto.descricao}</p>
                <p>R${produto.preco}</p>
            </div>
    ))}
    </div>
  )
}
