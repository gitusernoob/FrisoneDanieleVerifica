import { useState } from "react";

import Header from "./components/Header";

function App() {
  const [name, setName] = useState("ospite");
  console.log("name: ", name);
  console.log("setname", setName);
  return (
    <>
      <Header title="My App" />
    </>
  );
}

export default App;
