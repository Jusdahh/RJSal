import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login_Register.module.css";

export default function Register() {
  function signupValidation(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    let confirmPassword = event.target.passwordConfirm.value;
    let termChecked = event.target.termCon.checked;

    let regEmail = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+.)+([a-zA-Z]{2,4})+$/;
    let regName = /\d+/g;
    let regPassword = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;

    if (name === "" || regName.test(name)) {
      alert("Entre com um nome válido!");
      return;
    }
    if (email === "" || !regEmail.test(email)) {
      alert("Entre com um e-mail válido!");
      return;
    }
    if (password === "" || regPassword.test(password)) {
      alert("Entre com uma senha válida!");
      return;
    }
    if (
      confirmPassword === "" ||
      regPassword.test(confirmPassword) ||
      confirmPassword !== password
    ) {
      alert("Confirme sua senha!");
      return;
    }
    if (!termChecked) {
      alert("Confirme os termos de uso!");
      return;
    }

    alert("Registro efetuado com sucesso!");
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.forms}>
          <div className={`${styles.form} ${styles.signup}`}>
            <span className={styles.title}>Signup</span>
            <form name="signupForm" onSubmit={signupValidation}>
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
                  <label htmlFor="termCon" className={styles.text}>
                    Li e concordo com os Termos de Uso
                  </label>
                </div>
              </div>
              <div className={`${styles.inputField} ${styles.Btn}`}>
                <input type="submit" value="Cadastre-se" />
              </div>
            </form>
            <div className={styles.loginSignup}>
              <span className={styles.text}>
                Já é um membro?
                <Link to="/login" className={`${styles.text} ${styles.loginLink}`}>
                  Entre
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}