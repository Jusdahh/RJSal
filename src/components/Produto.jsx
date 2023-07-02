import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link, useParams } from 'react-router-dom';

export default function Produto() {
    const { id } = useParams();
    const [produto, setProduto] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://api-sal.vercel.app/produtos/${id}`)
        .then((response) => {
            setProduto(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);
    
    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={600}/>
                </div>
                <div className="col-md-6">
                    <Skeleton height={60} width={300} style={{lineHeight:2}}/>
                    <Skeleton height={85}/>
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={25} width={150} style={{marginLeft:6}}/>

                    
                </div>
            </>
        )
    }

    const MostraProduto = () => {
        return produto.map((produto) => (
            <>
            <div className="col-md-6">
                <img src={produto.imagem} alt={produto.nome} height="600px" width="600px"/>
            </div>
            <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'>
                    {/* Trocar por categoria: */}
                    {produto.nome} 
                </h4>
                <h1 className='display-5'>{produto.nome}</h1>
                <h3 className="display-6 fw-bold my-4">R$ {produto.preco}</h3>
                <p className="lead">{produto.descricao}</p>
                <button className="btn btn-outline-dark btn-lg  px-4 py-2">Adicionar ao Carrinho</button>
                <Link to='/carrinho' className="btn btn-dark btn-lg ms-2 px-2 py-2">Ir para o Carrinho</Link >
            </div>
            </>
        ))
    }

  return (
    <div>
        <div className='container py-5'>
            <div className='row py-5'>
                {loading ? <Loading/> : <MostraProduto/>}
            </div>
        </div>
    </div>
  )
}
