import { CiLogin as Login } from "react-icons/ci";
import { useState } from "react";
import Select from "react-select";

import Header from "../components/Header";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

const options = [
  { value: "ALTA", label: "Alta" },
  { value: "MEDIA", label: "Media" },
  { value: "BASSA", label: "Bassa" }
];

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    titolo: "",
    dataDiScadenza: "",
    priorita: "",
    completato: false
  });
  const [disabled, setDisabled] = useState(true);

  const formController = todo => {
    if (todo.titolo !== "" && todo.dataDiScadenza !== "" && todo.priorita !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  console.log(disabled);

  const onChange = (event, key) => {
    // const value = event.target !== undefiend ? event.target.value : event.value;
    let value = "";

    if (event.target !== undefined) {
      value = event.target.value;
    } else {
      value = event.value;
    }

    setTodo({
      ...todo,
      [key]: value
    });

    formController({
      ...todo,
      [key]: value
    });
  };

  function onClick() {
    setTodos([...todos, todo]);
    setTodo({
      titolo: "",
      dataDiScadenza: "",
      priorita: ""
    });
  }

  let todosTitles = null;
  if (Array.isArray(todos) && todos.length > 0) {
    todosTitles = todos.map(todo => {
      return (
        <Card>
          <h1>{todo.titolo}</h1>
        </Card>
      );
    });
  }

  return (
    <>
      <Header title="Dashbaord" icon={<Login />} to="/login" />
      <Card>
        <div className="w-full flex justify-between items-center">
          <div>
            <h1>Todo Done</h1>
            <h4>keep it up</h4>
          </div>
          <div>{todos.length}</div>
        </div>
      </Card>
      {/* todo form */}
      <div className="w-full flex justify-center items-center mt-5">
        <div className="w-2/6">
          <Input type="text" placeholder="Inserisci il task" value={todo.titolo} onChange={e => onChange(e, "titolo")} />
          <Input type="date" placeholder="Inserisci la data di scadenza" value={todo.dataDiScadenza} onChange={e => onChange(e, "dataDiScadenza")} />
          <Select
            options={options}
            value={options.find(option => option.value === todo.priorita) ?? null}
            placeholder="Scegli la priorita"
            className="mt-2"
            onChange={e => onChange(e, "priorita")}
            isClearable={true}
          />
          <Button title="Submit" onClick={onClick} disabled={disabled} />
        </div>
      </div>
      {todosTitles}
    </>
  );
}

export default Dashboard;
