import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login_Register.module.css";

export default function Register() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.forms}>
          {/* <!-- Formulário de Registro --> */}
          <div className={`${styles.form} ${styles.signup}`}>
            <span className={styles.title}>Signup</span>
            <form name="signupForm" onsubmit="signupValidation()">
              <div className={styles.inputField}>
                <input
                  type="text"
                  name="name"
                  placeholder="Insira seu nome aqui"
                />
              </div>
              <div className={styles.inputField}>
                <input
                  type="email"
                  name="email"
                  placeholder="Insira seu e-mail aqui"
                />
                
              </div>
              <div className={styles.inputField}>
                <input
                  type="password"
                  name="password"
                  placeholder="Crie sua senha aqui"
                />
                
              </div>
              <div className={styles.inputField}>
                <input
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirme sua senha aqui"
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
                <input type="submit" value="Cadastre-se" />
              </div>
            </form>
            <div className={styles.loginSignup}>
              <span className="text">
                Já é um membro?
                <Link to="/login" className={`${styles.text} ${styles.loginLink}`}>Entre</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
