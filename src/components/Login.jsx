import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './Login_Register.module.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className={styles.body}>
    <div className={styles.container}>
        <div className={styles.forms}>
            <div className={`${styles.form} ${styles.login}`}>
                <span className={styles.title}>Login</span>

                <form action="" name="loginForm" onsubmit="loginValidation()">
                    <div className={styles.inputField}>
                        <input type="email" name="email" placeholder="Entre com o seu e-mail" required/>
                    </div>
                    <div className={styles.inputField}>
                        <input type="password" name="password" className={styles.password} placeholder="Entre com a sua senha" required/>
                    </div>
                    <div className={styles.checkboxText}>
                        <div className={styles.checkboxContent}>
                            <input type="checkbox" name="loginCheck" id={styles.loginCheck}/>
                            <label for="loginCheck" className={styles.text}>Lembrar login</label>
                        </div>
                        <a href="#" className={styles.text}>Esqueci a senha</a>
                    </div>
                    <div className={`${styles.inputField} ${styles.Btn}`}>
                        <input type="submit" value="Entre"/>
                    </div>
                </form>
                <div className={styles.loginSignup}>
                    <span className={styles.text}>Novo por aqui?
                        <Link to="/register" className={`${styles.text} ${styles.signupLink}`}>Cadastre-se</Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
