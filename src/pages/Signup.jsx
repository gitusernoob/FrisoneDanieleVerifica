
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

  /* nome utente */

  const [name, setName] = useState("");

  /* email utente */

  const [email, setEmail] = useState("");

  /* prima password */

  const [password, setPassword] = useState("");
  const [passwordInputType, setPasswordInputType] = useState("password");

  function changePasswordInputType() {
    if (passwordInputType === "text") {
      setPasswordInputType("password");
    } else {
      setPasswordInputType("text");
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  /* seconda password */

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmInputType, setPasswordConfirmInputType] = useState("password");

  function changePasswordConfirmInputType() {
    if (passwordConfirmInputType === "text") {
      setPasswordConfirmInputType("password");
    } else {
      setPasswordConfirmInputType("text");
    }
  }

  function handlePasswordConfirmChange(event) {
    setPasswordConfirm(event.target.value);
  }


  /* verifica validità input */

 
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 

  function onClick(e) {
    e.preventDefault();

    if(name.length > 2){
      
      if(validazioneEmail(email)){
        if(validazionePassword(password, passwordConfirm)){

          setMessage("tutto a posto");
          const userData = {
            name: name,
            email: email,
            password: password 
          };
          localStorage.setItem('userData', JSON.stringify(userData)); 

          //naviga alla pagina di Login
          navigate('/login');

        }
      }

    } else {
      setMessage("nome con meno di 3 caratteri");
    }
    
  }

  function validazionePassword(password, passwordConfirm){
    if (password === passwordConfirm && 
        password !== "" && 
        password.length>7 && 
        containsUppercase(password) && 
        !containsOnlyUppercase(password) &&
        containsNumber(password)
    ){

      return true;

    }else if(password === ""){
      setMessage("inserisci una password");
    } else if(password !== passwordConfirm  ){
      setMessage("password diverse")
    } else if(password.length<8){
      setMessage("password con meno di 8 caratteri");
    } else if(!containsUppercase(password)){
      setMessage("inserisci una lettera maiuscola nella password")
    } else if(containsOnlyUppercase(password)){
      setMessage("inserisci una lettera minuscola nella password")
    } else if(!containsNumber(password)){
      setMessage("inserisci un numero")
    }
    return false;
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
    // se non ho inserito nulla nel campo
    if(email==''){setMessage("Devi indicare un indirizzo email"); return false;}
    // verifico se è un indirizzo valido
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      setMessage("")
      return true;
    }
    else {
      setMessage("L'indirizzo email che hai inserito non e' valido");
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

           {/* nome div */}

           <div className="w-full">
            <Input type="text" placeholder="name surname" value={name} onChange={event => setName(event.target.value)} />
          </div>

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

          {/* password confirm div  */}

            <div className="w-full flex relative">
            <Input type={passwordConfirmInputType} placeholder="confirm password" value={passwordConfirm} onChange={handlePasswordConfirmChange} />
            <span className="absolute right-3 top-3.5 cursor-pointer" onClick={changePasswordConfirmInputType}>
              {passwordConfirmInputType === "text" ? <HidePassword /> : <ShowPassword />}
            </span>
          </div>


          {/* Button div */}

          <div className="w-full">
            <Button title="Sign Up" onClick={onClick} />
          </div>

          <h3> {message}</h3>
        </form>
      </Card>

  </>
  
  
  
  );
}

export default Signup;
