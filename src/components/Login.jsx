import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Login_Register.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const loginValidation = () => {
    axios
      .post("https://api-sal.vercel.app/login", {
        email: email,
        senha: senha,
      })
      .then((response) => {
        const { success, message } = response.data;

        if (success) {
          // Login bem-sucedido, exibir alerta de sucesso
          alert(message);

          // Redirecionar para a página
          window.location.href = "/";
        } else {
          // Login falhou, exibir alerta de erro
          alert(message);
        }
      })
      .catch((error) => {
        // Erro na requisição, exibir alerta de erro
        alert("Erro ao processar o login");
        console.error(error);
      });
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.forms}>
          <div className={`${styles.form} ${styles.login}`}>
            <span className={styles.title}>Login</span>
            <div className={styles.inputField}>
              <input
                type="email"
                name="email"
                placeholder="Entre com o seu e-mail"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <input
                type="password"
                name="password"
                className={styles.password}
                placeholder="Entre com a sua senha"
                required
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className={styles.checkboxText}>
              <div className={styles.checkboxContent}>
                <input
                  type="checkbox"
                  name="loginCheck"
                  id={styles.loginCheck}
                />
                <label htmlFor="loginCheck" className={styles.text}>
                  Lembrar login
                </label>
              </div>
              <Link to="#" className={styles.text}>
                Esqueci a senha
              </Link>
            </div>
            <div className={`${styles.inputField} ${styles.Btn}`}>
              <input type="submit" value="Entre" onClick={loginValidation} />
            </div>

            <div className={styles.loginSignup}>
              <span className={styles.text}>
                Novo por aqui?
                <Link
                  to="/register"
                  className={`${styles.text} ${styles.signupLink}`}
                >
                  Cadastre-se
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
