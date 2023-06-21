import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div>
                    {/* <!-- Formulário de Registro --> */}
                    <div class="form signup">
                <span class="title">Signup</span>
                <form name="signupForm" onsubmit="signupValidation()">
                    <div class="inputField">
                        <input type="text" name="name" placeholder="Insira seu nome aqui"/>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="inputField">
                        <input type="email" name="email" placeholder="Insira seu e-mail aqui"/>
                        <i class="fa-solid fa-at"></i>
                    </div>
                    <div class="inputField">
                        <input type="password" name="password" placeholder="Crie sua senha aqui"/>
                        <i class="fa-solid fa-key"></i>
                        {/* <!-- <i class="fa-solid fa-eye-low-vision hideshowpw"></i> --> */}
                    </div>
                    <div class="inputField">
                        <input type="password" name="passwordConfirm" placeholder="Confirme sua senha aqui"/>
                        <i class="fa-solid fa-key"></i>
                        {/* <!-- <i class="fa-solid fa-eye-low-vision hideshowpw"></i> --> */}
                    </div>
                    <div class="checkboxText">
                        <div class="checkboxContent">
                            <input type="checkbox" name="termCon" id="termCon"/>
                            <label for="termCon" class="Text">Li e concordo com os Termos de Uso</label>
                        </div>
                    </div>
                    <div class="inputField Btn">
                        <input type="submit" value="Cadastre-se"/>
                    </div>
                </form>
                <div class="loginSignup">
                    <span class="text">Já é um membro?
                        <Link to="/login" class="text loginLink">Entre</Link>
                    </span>
                </div>
            </div>
    </div>
  )
}
