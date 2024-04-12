import { CiLogin as Login } from "react-icons/ci";
import { useState } from "react";
import Select from "react-select";
import { v4 as uuid } from "uuid";

import Header from "../components/Header";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";

const options = [
  { value: "ALTA", label: "Alta" },
  { value: "MEDIA", label: "Media" },
  { value: "BASSA", label: "Bassa" }
];

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: uuid(),
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
      id: uuid(),
      titolo: "",
      dataDiScadenza: "",
      priorita: "",
      completato: false
    });
  }

  let todosTitles = null;
  if (Array.isArray(todos) && todos.length > 0) {
    todosTitles = todos.map(todo => {
      return (
        <Card key={todo.id}>
          <div className="w-full flex items-center">
            <Checkbox onChange={e => onChange(e, "completato", "checkbox")} checked={todo.completato} />
            <div className="flex gap-2 items-center">
              <h1 className="mr-2 font-bold">{todo.titolo}</h1>
              <span className="relative text-base text-gray-500">
                <span className="absolute text-xs left-0 -top-5">Scadenza:</span>
                {todo.dataDiScadenza}
              </span>
            </div>
            <h6
              className={`absolute -right-6 -top-3 text-white text-sm px-2 py-1 rounded-lg ${
                todo.priorita === "ALTA" ? "bg-red-500" : todo.priorita === "MEDIA" ? "bg-yellow-500" : "bg-green-500"
              }`}>
              {todo.priorita}
            </h6>
          </div>
        </Card>
      );
    });
  }

  console.log(todos);

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
        <div className="w-3/6">
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
