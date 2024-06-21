import React from "react";
import { usegetInputValue } from "../../hooks/useGetInputValue";
import "../register/Register.css";
import axios from "../../api";

const initialState = {
  FirstName: "",
  LastName: "",
  UserName: "",
  password: "",
  phones: "",
};

const Register = () => {
  let { formData, handleChange, setFormData } = usegetInputValue(initialState);
  let handleSubmit = (e) => {
    e.preventDefault();
    formData.phones = [formData.phones];
    axios
      .post("/auth/user/sign-up", formData)
      .then(() => alert("Welcome! \nMuvaffaqqiyati ro'yxatdan o'tdingiz"))
      .catch(() => alert("Tizimda xatolik bor"));
    setFormData(initialState);
  };
  return (
    <div className="container">
      <div className="register">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} action="">
          <input
            required
            value={formData.UserName}
            onChange={handleChange}
            name="UserName"
            type="text"
            placeholder="Your Username"
          />
          <input
            value={formData.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Your Password"
          />
          <input
            required
            value={formData.LastName}
            onChange={handleChange}
            name="LastName"
            type="text"
            placeholder="Your Lastname"
          />
          <input
            required
            value={formData.FirstName}
            onChange={handleChange}
            name="FirstName"
            type="text"
            placeholder="Your Firstname"
          />
          <input
            required
            value={formData.phones}
            onChange={handleChange}
            name="phones"
            type="number"
            placeholder="Your Phone Number"
          />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};
export default Register;
