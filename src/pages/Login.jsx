import React, { useState } from "react";
import { IoEyeSharp as ShowPassword } from "react-icons/io5";
import { FaEyeSlash as HidePassword } from "react-icons/fa6";
import { SiGnuprivacyguard as Signup } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

import Header from "../components/Header";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInputType, setPasswordInputType] = useState("password");


  function changePasswordInputType() {
    setPasswordInputType(prevType => prevType === "text" ? "password" : "text");
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const navigate = useNavigate(); 
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // Recupera i dati dall'localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      // Verifica se le credenziali corrispondono
      if (userData.email === email && userData.password === password) {
        // Effettua il login e reindirizza alla dashboard
        navigate('/dashboard');
      } else {
        // Credenziali non corrette, gestisci l'errore o mostra un messaggio all'utente
        setMessage("Credenziali non corrette")
      }
    } else {
      // Nessun utente trovato nel localStorage, gestisci l'errore o mostra un messaggio all'utente
      setMessage("Nessun utente trovato");
    }
  }

  return (
    <div>
      <Header title="Login" icon={<Signup />} to="/signup" />
      <Card>
        <h1 className="text-2xl">Login</h1>
        <hr className="h-1 w-32 bg-dark-green" />
        <form className="w-full" onSubmit={handleLogin}> 
          {/* email div */}
          <div className="w-full">
            <Input type="email" placeholder="example@test.com" value={email} onChange={event => setEmail(event.target.value)} />
          </div>
          {/* password div */}
          <div className="w-full flex relative">
            <Input type={passwordInputType} placeholder="password" value={password} onChange={handlePasswordChange} />
            <span className="absolute right-3 top-3.5 cursor-pointer" onClick={changePasswordInputType}>
              {passwordInputType === "text" ? <HidePassword /> : <ShowPassword />}
            </span>
          </div>
          {/* Button div */}
          <div className="w-full">
            <Button type="submit" title="Login" /> 
          </div>
        </form>
        <h3> {message}</h3>
      </Card>
      
    </div>
  );
}

export default Login;
