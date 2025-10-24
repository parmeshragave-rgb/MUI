import React, { Component } from "react";
import { useauth } from "./auth";
import { Navigate } from "react-router-dom";

class Requireauth extends Component {
  render() {
    if (!this.props.auth.user) {
      
      return <Navigate to="/login"/>;
    }

    return this.props.children;
  }
}

function Wrapperrequireauth({ children }) {
  const auth = useauth();
  return <Requireauth auth={auth}>{children}</Requireauth>;
}

export default Wrapperrequireauth;
