import React from "react";
import Input from "./Input.jsx";

const loginFields = [
  { name: "Username", type: "text" },
  { name: "Password", type: "password" }
];

function loginField(props) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
}

function Login() {
  return (
    <form className="form">
      {loginFields.map(loginField)}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
