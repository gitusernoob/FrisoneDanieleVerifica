import Header from "../components/Header";
import { CiLogin as Login } from "react-icons/ci";

function Dashboard() {
  return (
    <>
      <Header title="Dashbaord" icon={<Login />} to="/login" icon2={<Login />} to2="/login" />
    </>
  );
}

export default Dashboard;
