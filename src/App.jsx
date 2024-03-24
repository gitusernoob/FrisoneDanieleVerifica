import { useState } from "react";

import Header from "./components/Header";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  console.log(user);

  return (
    <>
      <Header title="My App" />
      <div className="flex justify-center items-center">
        <div
          className="w-2/6 flex flex-col justify-center items-center mt-5 space-y-3 py-5 px-6 rounded-lg"
          style={{ boxShadow: "14px 5px 70px 6px rgba(0,0,0,0.1)" }}>
          <h1 className="text-2xl">Login</h1>
          <div className="w-full">
            <input
              type="email"
              value={email}
              placeholder="example@test.com"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-dark-green"
              onChange={event => {
                setEmail(event.target.value);
                setUser(prevState => {
                  return {
                    ...prevState,
                    email: event.target.value
                  };
                });
              }}
            />
          </div>
          <div className="w-full">
            <input
              type="password"
              value={password}
              placeholder="password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-dark-green"
              onChange={event => {
                setPassword(event.target.value);
                setUser(prevState => {
                  return {
                    ...prevState,
                    password: event.target.value
                  };
                });
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
