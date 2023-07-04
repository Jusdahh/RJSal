import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login_Register.module.css';

export default function Login() {
  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const regEmail = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+.)+([a-zA-Z]{2,4})+$/;

    if (email === '' || !regEmail.test(email)) {
      alert('Por favor, entre com um e-mail válido.');
      return;
    }

    if (password === '') {
      alert('Por favor, entre com sua senha.');
      return;
    }

    alert('Login efetuado com sucesso!');
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.forms}>
          <div className={`${styles.form} ${styles.login}`}>
            <span className={styles.title}>Login</span>

            <form onSubmit={handleLogin}>
              <div className={styles.inputField}>
                <input type="email" name="email" placeholder="Entre com o seu e-mail" required />
              </div>
              <div className={styles.inputField}>
                <input
                  type="password"
                  name="password"
                  className={styles.password}
                  placeholder="Entre com a sua senha"
                  required
                />
              </div>
              <div className={styles.checkboxText}>
                <div className={styles.checkboxContent}>
                  <input type="checkbox" name="loginCheck" id={styles.loginCheck} />
                  <label htmlFor="loginCheck" className={styles.text}>
                    Lembrar login
                  </label>
                </div>
                <a href="#" className={styles.text}>
                  Esqueci a senha
                </a>
              </div>
              <div className={`${styles.inputField} ${styles.Btn}`}>
                <input type="submit" value="Entre" />
              </div>
            </form>
            <div className={styles.loginSignup}>
              <span className={styles.text}>
                Novo por aqui?
                <Link to="/register" className={`${styles.text} ${styles.signupLink}`}>
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