import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login_Register.module.css";
import axios from "axios";

export default function Register() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  const registerValidation = () => {
    axios.post('https://api-sal.vercel.app/register', {
      email: email,
      senha: senha,
      nome_usuario: nome
    }).then((response) => {
      const { success, message } = response.data;
  
      if (success) {
        // Registro bem-sucedido, exibir alerta de sucesso
        alert(message);
  
        // Limpar os campos de registro
        setEmail('');
        setSenha('');
        setNome('');
  
        // Redirecionar para a página de login
        window.location.href = '/login';
      } else {
        // Registro falhou, exibir alerta de erro
        alert(message);
      }
    }).catch((error) => {
      // Erro na requisição, exibir alerta de erro
      alert('Erro ao processar o registro');
      console.error(error);
    });
  }
  
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <form className={styles.forms}>
          {/* <!-- Formulário de Registro --> */}
          <div className={`${styles.div} ${styles.signup}`}>
            <span className={styles.title}>Signup</span>
            <div>
              <div className={styles.inputField}>
                <input
                  type="text"
                  name="name"
                  placeholder="Insira seu nome aqui"
                  onChange={e => setNome(e.target.value)}
                />
              </div>
              <div className={styles.inputField}>
                <input
                  type="email"
                  name="email"
                  placeholder="Insira seu e-mail aqui"
                  onChange={e => setEmail(e.target.value)}
                />
                
              </div>
              <div className={styles.inputField}>
                <input
                  type="password"
                  name="password"
                  placeholder="Crie sua senha aqui"
                  onChange={e => setSenha(e.target.value)}
                />
                
              </div>
              
              <div className={styles.checkboxText}>
                <div className={styles.checkboxContent}>
                  <input type="checkbox" name="termCon" id="termCon" />
                  <label for="termCon" className="Text">
                    Li e concordo com os Termos de Uso
                  </label>
                </div>
              </div>
              <div className={`${styles.inputField} ${styles.Btn}`}>
                <input type="submit" value="Cadastre-se" onClick={registerValidation}/>
              </div>
            </div>
            <div className={styles.loginSignup}>
              <span className="text">
                Já é um membro?
                <Link to="/login" className={`${styles.text} ${styles.loginLink}`}>Entre</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
