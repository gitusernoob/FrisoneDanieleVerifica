import Card from "./Card";
import Checkbox from "./Checkbox";

function TodoCard(props) {
  const { titolo, dataDiScadenza, priorita, checked, onChange } = props;
  return (
    <Card>
      <div className="w-full flex items-center">
        <Checkbox onChange={onChange} checked={checked} />
        <div className="flex gap-2 items-center">
          <h1 className="mr-2 font-bold">{titolo}</h1>
          <span className="relative text-base text-gray-500">
            <span className="absolute text-xs left-0 -top-5">Scadenza:</span>
            {dataDiScadenza}
          </span>
        </div>
        <h6
          className={`absolute -right-6 -top-3 text-white text-sm px-2 py-1 rounded-lg ${
            priorita === "ALTA" ? "bg-red-500" : priorita === "MEDIA" ? "bg-yellow-500" : "bg-green-500"
          }`}>
          {priorita}
        </h6>
      </div>
    </Card>
  );
}

export default TodoCard;
