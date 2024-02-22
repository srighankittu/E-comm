import Login from "./components/Login";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Login />
        <Outlet />
      </div>
    </>
  );
}

export default App;
