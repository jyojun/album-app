import React, { useState, useContext } from "react";
import { LoginDiv } from "../Style/LoginCSS";
import Gallery from "react-photo-gallery";
import { photos } from "./Home.js";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const Auth = useContext(AuthContext);
  const onSubmit = (e) => {
    e.preventDefault();
    let dummyUser = {
      email: "test@test.com",
      password: "12341234",
    };

    if (Email === dummyUser.email && Password === dummyUser.password) {
      const token = "testtoken123123";
      localStorage.setItem("auth-token", token);
      Auth.login();
      navigate("/");
    } else {
      alert("wrong email or password");
    }
  };
  return (
    <>
      <LoginDiv>
        <h3>Login</h3>
        <form onSubmit={onSubmit}>
          <TextField
            style={{ width: "100%", marginBottom: "1rem" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            style={{ width: "100%", marginBottom: "1rem" }}
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
      </LoginDiv>
      <Gallery style={{ filter: "blur(4px)" }} photos={photos} />
    </>
  );
}

export default Login;
