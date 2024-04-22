import { LuLayoutDashboard as DashboardIcon } from "react-icons/lu";
import { useState } from "react";
import { IoEyeSharp as ShowPassword } from "react-icons/io5";
import { FaEyeSlash as HidePassword } from "react-icons/fa6";
import Header from "../components/Header";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmInputType, setPasswordConfirmInputType] = useState("password");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 

  function changePasswordInputType() {
    setPasswordInputType(prevType => prevType === "text" ? "password" : "text");
  }

  function changePasswordConfirmInputType() {
    setPasswordConfirmInputType(prevType => prevType === "text" ? "password" : "text");
  }

  function onClick(e) {
    e.preventDefault();

    if(name.length > 2){
      if(validazioneEmail(email)){
        if(validazionePassword(password, passwordConfirm)){
          setMessage("Tutto a posto");
          const userData = {
            name: name,
            email: email,
            password: password 
          };
          localStorage.setItem('userData', JSON.stringify(userData)); 
          navigate('/login');
        }
      }
    } else {
      setMessage("Nome con meno di 3 caratteri");
    }
  }

  function validazionePassword(password, passwordConfirm){
    if (password === passwordConfirm && 
        password !== "" && 
        password.length > 7 && 
        containsUppercase(password) && 
        !containsOnlyUppercase(password) &&
        containsNumber(password)
    ){
      return true;
    } else {
      let messages = [];
      if(password === "") messages.push("Inserisci una password");
      if(password !== passwordConfirm) messages.push("Le password non corrispondono");
      if(password.length < 8) messages.push("La password deve essere lunga almeno 8 caratteri");
      if(!containsUppercase(password)) messages.push("La password deve contenere almeno una lettera maiuscola");
      if(containsOnlyUppercase(password)) messages.push("La password deve contenere almeno una lettera minuscola");
      if(!containsNumber(password)) messages.push("La password deve contenere almeno un numero");

      setMessage(messages.join(". "));
      return false;
    }
  }

  function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }

  function containsOnlyUppercase(str) {
    const onlyLetters = str.replace(/\d/g, ''); // Rimuovere i numeri dalla stringa
    return /^[A-Z]+$/.test(onlyLetters);
  }

  function containsNumber(str) {
    return /\d/.test(str);
  }

  function validazioneEmail(email) 
  {
    if(email === '') {
      setMessage("Devi indicare un indirizzo email");
      return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      setMessage("");
      return true;
    }
    else {
      setMessage("L'indirizzo email che hai inserito non è valido");
      return false;
    }
  }

  return (
    <>
      <Header title="Signup" icon={<DashboardIcon />} to="/" />
      <Card>
        <h1 className="text-2xl">Sign Up</h1>
        <hr className="h-1 w-32 bg-dark-green" />
        <form className="w-full">
          <div className="w-full">
            <Input type="text" placeholder="Nome e cognome" value={name} onChange={event => setName(event.target.value)} />
          </div>
          <div className="w-full">
            <Input type="email" placeholder="example@test.com" value={email} onChange={event => setEmail(event.target.value)} />
          </div>
          <div className="w-full flex relative">
            <Input type={passwordInputType} placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
            <span className="absolute right-3 top-3.5 cursor-pointer" onClick={changePasswordInputType}>
              {passwordInputType === "text" ? <HidePassword /> : <ShowPassword />}
            </span>
          </div>
          <div className="w-full flex relative">
            <Input type={passwordConfirmInputType} placeholder="Conferma password" value={passwordConfirm} onChange={event => setPasswordConfirm(event.target.value)} />
            <span className="absolute right-3 top-3.5 cursor-pointer" onClick={changePasswordConfirmInputType}>
              {passwordConfirmInputType === "text" ? <HidePassword /> : <ShowPassword />}
            </span>
          </div>
          <div className="w-full">
            <Button title="Registrati" onClick={onClick} />
          </div>
          <h3>{message}</h3>
        </form>
      </Card>
    </>
  );
}

export default Signup;
