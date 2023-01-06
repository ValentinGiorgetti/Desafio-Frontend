import React, { useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export function isLoggedIn() {
  return sessionStorage.getItem('isLoggedIn')  === 'true';
}

function Login() {
  const correctUsername = "prueba";
  const correctPassword = "123";
  const navigate = useNavigate();

  useEffect(() => {
		if (isLoggedIn()) navigate("/home");
	}, [navigate]);

  const handleSubmit = e => {
    e.preventDefault();

    if ((e.target.username.value !== correctUsername) | (e.target.password.value !== correctPassword)) {
      alert("Credenciales incorrectas, inténtelo nuevamente");
    } else {
      sessionStorage.setItem('isLoggedIn', 'true');
      navigate("/home");
    }    
  };

    return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input type="text" name="username" required=""/>
          <label>Usuario</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required=""/>
          <label>Contraseña</label>
        </div>
        <button type="subimit" className="login-button">Iniciar sesión</button>
      </form>
    </div>
    );
}

export default Login;