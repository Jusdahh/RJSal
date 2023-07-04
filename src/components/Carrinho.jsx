import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delCart } from '../redux/action';

const Carrinho = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const removerItem = (produto) => {
    dispatch(delCart(produto));
  };

  return (
    <div className='container my-5 py-5'>
      <h2 className='mb-4'>Carrinho</h2>
      {state.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul className='list-group'>
          {state.map((produto) => (
            <li key={produto.id} className='list-group-item d-flex justify-content-between align-items-center'>
                <img src={produto.imagem} alt={produto.nome} height="200px" width="200px"/>
              <span>{produto.nome}</span>
              <span>{produto.preco}</span>
              <button className='btn btn-outline-danger' onClick={() => removerItem(produto)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrinho;
