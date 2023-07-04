import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Usuario = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Função para obter os dados do usuário pelo ID
    const fetchUsuario = async () => {
      try {
        const response = await axios.get(`https://api-sal.vercel.app/usuarios/${id}`);
        setUsuario(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Chama a função de obter usuário ao carregar a página
    fetchUsuario();
  }, [id]);

  if (!usuario) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Página do Usuário</h1>
      <h2>ID: {usuario.id}</h2>
      <h2>Nome: {usuario.nome}</h2>
      <h2>Email: {usuario.email}</h2>
      {/* Aqui você pode exibir outras informações do usuário */}
    </div>
  );
};

export default Usuario;
