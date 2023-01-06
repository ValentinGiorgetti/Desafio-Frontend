import React, { useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function isLoggedIn() {
  return sessionStorage.getItem('isLoggedIn')  === 'true';
}

function Login() {
  const correctUsername = "prueba";
  const correctPassword = "123";
  const navigate = useNavigate();

  const [t, i18n] = useTranslation("global");

  useEffect(() => {
		if (isLoggedIn()) navigate("/home");
	}, [navigate]);

  const handleSubmit = e => {
    e.preventDefault();

    if ((e.target.username.value !== correctUsername) | (e.target.password.value !== correctPassword)) {
      alert(t("bad_credentials"));
    } else {
      sessionStorage.setItem('isLoggedIn', 'true');
      navigate("/home");
    }    
  };

  function setLanguage(language) {
    i18n.changeLanguage(language);
    sessionStorage.setItem("language", language);
  }

    return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input type="text" name="username" required=""/>
          <label>{t("username")}</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required=""/>
          <label>{t("password")}</label>
        </div>
        <button type="subimit" className="login-button">{t("login")}</button>
      </form>

      <button className="language-button" onClick={() => setLanguage("es")}> ES </button>
      <button className="language-button" onClick={() => setLanguage("en")}> EN </button>

    </div>
    );
}

export default Login;