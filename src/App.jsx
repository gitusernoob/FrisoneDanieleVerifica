import { useState } from "react";

import Header from "./components/Header";

function App() {
  const [name, setName] = useState("ospite");
  const [email, setEmail] = useState("example@test.com");
  const [user, setUser] = useState({
    name: "ospite",
    email: "example@test.com"
  });
  console.log(user);
  return (
    <>
      <Header title="My App" />
      <div className="flex flex-col justify-center items-center mt-3">
        <input
          type="text"
          value={name}
          className="border-black border-2 p-2 rounded"
          onChange={event => {
            const newName = event.target.value;
            setName(newName);
            setUser(prevState => {
              return {
                ...prevState,
                name: newName
              };
            });
          }}
        />
        <h1>{name}</h1>
        <input
          type="email"
          className="border-black border-2 p-2 rounded"
          value={email}
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
        <h1>{email}</h1>
      </div>
    </>
  );
}

export default App;
