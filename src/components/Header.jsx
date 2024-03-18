import { CiLogin } from "react-icons/ci";

function Header(props) {
  console.log(props.title);
  return (
    <header className="flex justify-between items-center bg-green-400 h-16">
      <div className="w-full flex justify-end items-center">
        <h1 className="text-4xl text-white text-center">{props.title}</h1>
        <div className=" w-1/2 flex justify-end items-center">
          <button className="text-4xl text-white py-2 px-4 rounded mr-3">
            <CiLogin />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
