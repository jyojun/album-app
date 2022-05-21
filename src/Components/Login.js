import React, { useState, useContext, useEffect } from "react";
import { LoginDiv } from "../Style/LoginCSS";
import Gallery from "react-photo-gallery";
import { photos } from "./Home.js";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const Auth = useContext(AuthContext);

  useEffect(() => {
    if (Auth.isAuthenticated) {
      alert("로그인 상태에는 접근할 수 없습니다.");
      navigate("/");
    }
  }, []);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const handleClickShowPassword = () => {
    setShowPassword(!ShowPassword);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let dummyUser = {
      email: "test@test.com",
      password: "12341234",
    };

    if (Email === "" || Password === "") {
      return alert("Email or Password should not be empty!");
    }

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
            placeholder="test@test.com"
            variant="outlined"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl style={{ width: "100%", marginBottom: "1rem" }}>
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={ShowPassword ? "text" : "password"}
              value={Password}
              placeholder="12341234"
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {ShowPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button type="submit">Login</Button>
        </form>
      </LoginDiv>
      <Gallery style={{ filter: "blur(4px)" }} photos={photos} />
    </>
  );
}

export default Login;
