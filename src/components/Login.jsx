import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div>
    <div class="container">
        <div class="forms">
            <div class="form login">
                <span class="title">Login</span>

                <form action="" name="loginForm" onsubmit="loginValidation()">
                    <div class="inputField">
                        <input type="email" name="email" placeholder="Entre com o seu e-mail" required/>
                        <i class="fa-solid fa-at"></i>
                    </div>
                    <div class="inputField">
                        <input type="password" name="password" class="password" placeholder="Entre com a sua senha" required/>
                        <i class="fa-solid fa-key"></i>
                        <i class="fa-solid fa-eye-low-vision hideshowpw"></i>
                    </div>
                    <div class="checkboxText">
                        <div class="checkboxContent">
                            <input type="checkbox" name="loginCheck" id="loginCheck"/>
                            <label for="loginCheck" class="Text">Lembrar login</label>
                        </div>
                        <a href="#" class="text">Esqueci a senha</a>
                    </div>
                    <div class="inputField Btn">
                        <input type="submit" value="Entre"/>
                    </div>
                </form>
                <div class="loginSignup">
                    <span class="text">Novo por aqui?
                        <Link to="/register" class="text signupLink">Cadastre-se</Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
