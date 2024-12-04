import React from "react";
import Container from "../Container";
import Grid from "../Grid";
import loginImg from "../../assets/images/login.png";
import { TextField } from "@mui/material";
import Button from "../Button";

const Login = () => {
  return (
    <Container>
      <Grid className="grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        <div className="justify-self-center">
          <img src={loginImg} alt="login image" />
        </div>
        <div className="w-4/5 p-12 flex flex-col gap-4 self-center">
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            size="small"
          />
          <TextField label="Password" type="password" fullWidth size="small" />
          <div className="text-center">
            <Button>Sign In</Button>
          </div>
          <div className="flex justify-between mt-4">
            <a
              href="/login"
              className="text-sm text-gray hover:text-primary hover:underline transition-all duration-75 ease-linear"
            >
              Forgot Password?
            </a>
            <a
              href="/signup"
              className="text-sm text-gray hover:text-primary hover:underline transition-all duration-75 ease-linear"
            >
              Sign Up
            </a>
          </div>
        </div>
      </Grid>
    </Container>
  );
};

export default Login;
