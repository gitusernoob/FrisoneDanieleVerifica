import { CiLogin as Login } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <header className="flex justify-between items-center bg-dark-green h-16">
      <div className="w-full flex justify-center items-center relative">
        <h1 className="text-4xl text-white text-center">{title}</h1>
        <div className="absolute right-0">
          <Link to="/login">
            <span className="text-4xl text-white py-2 px-6 rounded">
              <Login />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
