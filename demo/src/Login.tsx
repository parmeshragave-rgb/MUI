
import React, { Component } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useauth } from "./auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  handleLogin = () => {
    const { auth, navigate } = this.props;
    auth.login(this.state.user);
    navigate("/");
  };

  render() {
    return (
      <>
      <center>
        <h2>Login</h2><br />
        <Stack spacing={2} width="300px">
          <TextField variant="outlined" label="Username" onChange={(e) => this.setState({ user: e.target.value })} fullWidth/>
          <TextField variant="outlined" label="Password" type="password" fullWidth/>
          <Button variant="contained" onClick={this.handleLogin}>
            Login
          </Button>
        </Stack>
        </center>
      </>
    );
  }
}


function WrapperLogin() {
  const navigate = useNavigate();
  const auth = useauth();
  return <Login navigate={navigate} auth={auth} />;
}

export default WrapperLogin;
