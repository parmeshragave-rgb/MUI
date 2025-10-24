
import React, { Component } from "react";
import { useauth } from "./auth";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

class Profile extends Component {
  handleLogout = () => {
    this.props.auth.logout();
    this.props.navigate('/');
  };

  render() {
   

    return (
      <>
        <h1>Welcome {this.props.auth.user}</h1>
        <Button variant="contained" onClick={this.handleLogout}>
          Logout
        </Button>
      </>
    );
  }
}

function WrapperProfile() {
  const auth = useauth();
  const navigate=useNavigate()
  return <Profile auth={auth} navigate={navigate}/>;
}

export default WrapperProfile;
