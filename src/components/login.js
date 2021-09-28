import React from "react";
import logo from "../image/imageedit_1_3461157715.png";
import "../css/style-login.css";

class Login extends React.Component {
   render() {
      return (
         <div className="logo">
            <img src={logo} alt="Logo" width="80px" />
         </div>
      );
   }
}

export default Login;
