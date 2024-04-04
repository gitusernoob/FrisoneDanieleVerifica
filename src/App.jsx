import { useState } from "react";
import { IoEyeSharp as ShowPassword } from "react-icons/io5";
import { FaEyeSlash as HidePassword } from "react-icons/fa6";

import Header from "./components/Header";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [passwordInputType, setPasswordInputType] = useState("password");

  console.log(user);

  function changePasswordInputType() {
    if (passwordInputType === "text") {
      setPasswordInputType("password");
    } else {
      setPasswordInputType("text");
    }
  }

  return (
    <div>
      <Header title="My App" />
      <Card>
        <h1 className="text-2xl">Login</h1>
        <hr className="h-1 w-32 bg-dark-green" />
        {/* email div */}
        <div className="w-full">
          <Input type="email" placeholder="example@test.com" value={email} onChange={event => setEmail(event.target.value)} />
        </div>
        {/* password div */}
        <div className="w-full flex relative">
          <Input type="password" placeholder="password" value={password} />
          <span className="absolute right-3 top-3.5 cursor-pointer" onClick={changePasswordInputType}>
            {passwordInputType === "text" ? <HidePassword /> : <ShowPassword />}
          </span>
        </div>
        {/* Button div */}
        <div className="w-full">
          <Button title="Login" />
        </div>
      </Card>
    </div>
  );
}

export default App;
