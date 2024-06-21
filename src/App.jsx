import "./App.css";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Users from "./pages/users/Users";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
